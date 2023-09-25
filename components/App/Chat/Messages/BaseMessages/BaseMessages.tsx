import style from "./BaseMessages.module.scss";

import { useRef, useState, useEffect } from "react";

import ControlPanel from "./ControlPanel/ControlPanel";
import { MessageReceive, MessageSend } from "./Message/Message";

// Socket
import socketChat from '@/app/socket/chat/socket';

// Redux
import { useAppDispatch } from "@/app/redux/store";
import { addMessage } from "@/app/redux/chat/messages/slice";
import {
  changeLastMessage,
  incrementCountMessages,
  setCountMessagesZero,
} from "@/app/redux/chat/dialogs/slice";

import { Message, GetMessageChat, ChangeReadMessageChat, ErrorMessage } from "@/components/App/Chat/types/types";

type Props = {
  userId: number;
  currentDialogId: number;
  messages: Array<Message>;
  showMessage: (
    severity: "success" | "info" | "warn" | "error" | undefined,
    summary: string,
    detail: string,
    life: number
  ) => void;
};

const BaseMessages = ({
  userId,
  currentDialogId,
  messages,
  showMessage,
}: Props) => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    const payload = { author: userId, text: text, dialog: currentDialogId };
    // Socket Отправка сообщения
    socketChat.emit("message:post", payload);
    setText("");
  };

  useEffect(() => {
    // Получение Нового сообщения

    socketChat.on("server:new_message", (message: GetMessageChat) => {
      console.log('server:new_message - BaseMessages: ', message);
      // Добавление сообщения в Redux
      if (message.dialog.id === currentDialogId) {
        // Добавление сообщения в messages Redux
        dispatch(addMessage(message));

        // Изменение lastMessage
        dispatch(
          changeLastMessage({
            text: message.text,
            dialogId: message.dialog.id,
          })
        );

        // Обновление на прочитанные Всех сообщений в диалоге
        const payload = { dialog: message.dialog.id, user: userId };
        socketChat.emit("messages:read", payload);
      } else {
        // Проверяем есть ли мы в этом диалоге
        const authorId = message.dialog.author.id;
        const partnerId = message.dialog.partner.id;
        if (authorId === userId || partnerId === userId) {
          // Изменение lastMessage
          dispatch(
            changeLastMessage({
              text: message.text,
              dialogId: message.dialog.id,
            })
          );
          // Изменение счетчика сообщений
          dispatch(incrementCountMessages({
            dialogId: message.dialog.id,
          }))
        }
      }
    });

    socketChat.on("server:read_message", (message: ChangeReadMessageChat) => {
      if (message.user === userId) {
        // Изменяем В Диалоге количество не прочитанных сообщений
        dispatch(
          setCountMessagesZero({
            dialogId: message.dialog,
          })
        );
      }
    });

    // Обработка сообщения об ошибке
    socketChat.on("message_error", (data: ErrorMessage) => {
      if (data.userId === userId) {
        showMessage("error", "Ошибка", data.message, 4000);
      }
    });

    return () => {
      socketChat.removeListener("server:new_message");
      socketChat.removeListener("server:read_message");
      socketChat.off("message_error");
    };
  }, []);

  // Scroll Вниз Messages И сделать сообщения прочитанными
  let mainContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 999999);
      // Обновление на прочитанные Все сообщения в диалоге
      const payload = { dialog: currentDialogId, user: userId };
      socketChat.emit("messages:read", payload);
      // Изменение значения количества непрочитанных сообщнений в активном диалоге на 0
      dispatch(
        setCountMessagesZero({
          dialogId: currentDialogId,
        })
      );
    }
    return () => {
      mainContentRef.current = null;
    };
  }, [currentDialogId, messages.length]);

  return (
    <div className={style.chat_user_message_panel}>
      <div>
        <div className={style.user_select_panel}>
          <a href="#">
            <ul className={style.chat_detail}>
              <li>
                <div className={style.chat_profile_user}></div>
              </li>
              <li>
                <div className={style.chat_user_nm}>Art of Design</div>
              </li>
            </ul>
          </a>
        </div>
        <div className={style.msg_conversation} ref={mainContentRef}>
          {messages.map((el: Message) =>
            el.author.id === userId ? (
              <MessageSend
                key={el.id}
                message={el.text}
                createAt={el.created_at}
              />
            ) : (
              <MessageReceive
                key={el.id}
                createAt={el.created_at}
                message={el.text}
              />
            )
          )}
        </div>
        <ControlPanel sendMessage={sendMessage} setText={setText} text={text} />
      </div>
    </div>
  );
};

export default BaseMessages;
