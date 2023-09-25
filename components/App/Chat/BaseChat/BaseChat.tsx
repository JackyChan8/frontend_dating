'use client';
import style from "./BaseChat.module.scss";

import { useRef, useEffect } from "react";

import Link from "next/link";

import Dialogs from "../Dialogs/Dialogs";
import Messages from "../Messages/Messages";

// Prime React
import { Toast } from 'primereact/toast';

// Redux
import { useSelector } from "react-redux";
import { parseJwT } from "@/app/redux/user/slice";
import { useAppDispatch } from "@/app/redux/store";
import { selectUser } from "@/app/redux/user/selectors";
import { selectDialog } from "@/app/redux/chat/dialogs/selectors";
import { getAllDialogs } from "@/app/redux/chat/dialogs/asyncActions";

// Socket
import socketNotify from "@/app/socket/notify/socket";
import socketChat from '@/app/socket/chat/socket';

const BaseChat = () => {
  // Message Notification
  const toast = useRef<Toast>(null);

  const showMessage = (
    severity: 'success' | 'info' | 'warn' | 'error' | undefined,
    summary: string,
    detail: string,
    life: number,
  ) => {
    toast.current?.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: life,
    });
  };
  // Redux
  const dispatch = useAppDispatch();
  const { dialogs, status, isLoading } = useSelector(selectDialog);
  const { userID } = useSelector(selectUser);

  // Получения User ID
  useEffect(() => {
    if (!userID) dispatch(parseJwT());
  }, [userID, dispatch]);

  // Получения Диалогов
  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllDialogs());
    }
  }, [status, dispatch]);

  // Socket
  useEffect(() => {
    if (dialogs.length > 0) {
      // Подключение к сокету если есть диалоги
      socketChat.connect();
      // Подключение к сокету уведомления
      socketNotify.connect();

      // Обработчик события Ошибки (Вывод в всплывающем сообщении)
      socketChat.on("connect_error", (err) => {
        if (err.message === "Invalid credentials") {
          showMessage('error', 'Ошибка', err.message, 4000);
        }
      });
    }
    return () => {
      // Удаление обработчика connect_error
      socketChat.off("connect_error");

      // Отключение от сокета
      socketChat.disconnect();
    }
  }, [dialogs.length])
  
  return (
    <div className={style.chat_panel}>
      <div className={style.chat_user_list_panel}>
        <div
          className={`${style.add_group_btn} ${style.justify_space_between}`}
        >
          <h4>Диалоги</h4>
          <Link href={'/app/menu'}>Menu</Link>
          <a href="#" className={style.open_grp}>
            <i className={`${style.fa} ${style.fa_plus}`}></i>
          </a>
        </div>
        <Dialogs status={status} dialogs={dialogs} isLoading={isLoading} />
      </div>
      <Messages showMessage={showMessage} />
      <div>
        <Toast ref={toast} position="top-right" />
      </div>
    </div>
  );
};

export default BaseChat;
