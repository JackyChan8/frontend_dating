import style from "./BaseDialogs.module.scss";

import Dialog from "./Dialog/Dialog";

import { useEffect } from "react";

// Redyx
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/redux/store";
import { selectUser } from "@/app/redux/user/selectors";
import { selectDialog } from "@/app/redux/chat/dialogs/selectors";
import { changeLastMessage, incrementCountMessages } from "@/app/redux/chat/dialogs/slice";

// Socket
import socket from "@/components/App/Chat/socket/socket";

import { Dialog as DialogType } from "@/components/App/Chat/types/types";

const BaseDialogs = () => {
  const dispatch = useAppDispatch();
  const { dialogs, currentDialogId } = useSelector(selectDialog);
  const { userID } = useSelector(selectUser);

  useEffect(() => {
    type Photos = {
      id: number;
      filename: string;
      isAvatar: boolean;
    };

    type User = {
      id: number;
      photos: Array<Photos>;
    };

    type Dialog = {
      id: number;
      author: { id: number };
      partner: { id: number };
    };

    type GetMessageChat = {
      id: number;
      text: string;
      read: boolean;
      created_at: string;
      author: User;
      dialog: Dialog;
    };
    // Получение Нового сообщения
    socket.on("server:new_message", (message: GetMessageChat) => {
      console.log('server:new_message - BaseDialogs: ', message);
      const authorId = message.dialog.author.id;
      const partnerId = message.dialog.partner.id;
      if (authorId === userID || partnerId === userID) {
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
    });
    return () => {
      // Удаление обработчика server:new_message
      socket.removeListener('server:new_message');
    }
  }, []);

  return (
    <ul className={style.chat_list}>
      {dialogs.length ? (
        dialogs.map((dialog: DialogType) => (
          <Dialog key={dialog.id} dialog={dialog} userID={userID} dispatch={dispatch} currentDialogId={currentDialogId} />
        ))
      ) : (
        <h1>Empty</h1>
      )}
    </ul>
  );
};

export default BaseDialogs;
