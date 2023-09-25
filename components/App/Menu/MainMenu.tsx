"use client";
import style from "./MainMenu.module.scss";

import { useRef, useEffect } from "react";

import AppPhotoOne from "@/public/app/MainMenu/1.jpg";
import AppPhotoTwo from "@/public/app/MainMenu/2.jpg";
import AppPhotoThree from "@/public/app/MainMenu/3.webp";

// Prime React
import { Toast } from "primereact/toast";

import AppBlock from "./App/App";
import NavbarApp from "./NavbarMenu/NavbarApp";
import IconsMenu from "./IconsMenu/IconsMenu";

// Redux
import { useAppDispatch } from "@/app/redux/store";
import { selectUser } from "@/app/redux/user/selectors";
import { useSelector } from "react-redux";
import { parseJwT } from "@/app/redux/user/slice";

// Socket
import socketNotify from "@/app/socket/notify/socket";

const AppMainMenu = () => {
  // Message Notification
  const toast = useRef<Toast>(null);

  const showMessage = (
    severity: "success" | "info" | "warn" | "error" | undefined,
    summary: string,
    detail: string,
    life: number
  ) => {
    toast.current?.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: life,
    });
  };

  // Get User ID
  const dispatch = useAppDispatch();
  const { userID } = useSelector(selectUser);
  useEffect(() => {
    if (!userID) dispatch(parseJwT());
  }, [userID, dispatch]);

  useEffect(() => {
    // Подключение к сокету уведомления
    socketNotify.connect();
    // Обработчик события Ошибки (Вывод в всплывающем сообщении)
    socketNotify.on("connect_error", (err) => {
      if (err.message === "Invalid credentials") {
        showMessage("error", "Ошибка", err.message, 4000);
      }
    });

    return () => {
      // Удаление обработчика connect_error
      socketNotify.off("connect_error");
    };
  }, []);

  useEffect(() => {
    socketNotify.on("server:get_notify", (message) => {
      if (message.user === userID) {
        showMessage("info", "Информация", message.text, 5000);
      }
    });
    return () => {
      socketNotify.off("server:get_notify");
    };
  }, [userID]);

  return (
    <div className={style.main_menu}>
      <NavbarApp />
      <div className={style.apps}>
        <AppBlock
          src={AppPhotoOne}
          title="Заголовок"
          text="Goerli ETH tokens have NO VALUE. You will need to mine at least .10 ETH for extended gameplay, or more if you plan to play a lot. When you end your mining session and claim, the token balance"
          classBlock={style.app}
        />
        <AppBlock
          src={AppPhotoTwo}
          title="Заголовок"
          text="Goerli ETH tokens have NO VALUE. You will need to mine at least .10 ETH for extended gameplay, or more if you plan to play a lot. When you end your mining session and claim, the token balance"
          classBlock={style.app}
        />
        <AppBlock
          src={AppPhotoThree}
          title="Заголовок"
          text="Goerli ETH tokens have NO VALUE. You will need to mine at least .10 ETH for extended gameplay, or more if you plan to play a lot. When you end your mining session and claim, the token balance"
          classBlock={style.app}
        />
      </div>
      <IconsMenu />
      <div>
        <Toast ref={toast} position="top-right" />
      </div>
    </div>
  );
};

export default AppMainMenu;
