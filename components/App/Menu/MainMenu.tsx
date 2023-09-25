'use client';
import style from "./MainMenu.module.scss";

import { useEffect } from "react";

import AppPhotoOne from "@/public/app/MainMenu/1.jpg";
import AppPhotoTwo from "@/public/app/MainMenu/2.jpg";
import AppPhotoThree from "@/public/app/MainMenu/3.webp";

import AppBlock from "./App/App";
import NavbarApp from "./NavbarMenu/NavbarApp";
import IconsMenu from "./IconsMenu/IconsMenu";

// Redux
import { useAppDispatch } from "@/app/redux/store";
import { selectUser } from "@/app/redux/user/selectors";
import { useSelector } from "react-redux";
import { parseJwT } from "@/app/redux/user/slice";

const AppMainMenu = () => {
    // Get User ID
    const dispatch = useAppDispatch();
    const { userID } = useSelector(selectUser);
    useEffect(() => {
        if (!userID) dispatch(parseJwT());
    }, [userID, dispatch])

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
        </div>
    );
};

export default AppMainMenu;
