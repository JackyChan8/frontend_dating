import style from './NavbarApp.module.scss';

import Link from 'next/link';

import LogoCompany from '@/components/Main/Header/Logo/Logo';
import IconComponent from '@/components/Main/Utils/Icons';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';


const NavbarApp = () => {
    return (
        <div className={style.navbar__menu}>
            <div className={style.navbar}>
                <div className={style.navbar__logo}>
                    <LogoCompany />
                </div>
                <nav>
                    <IconComponent href='/app/chat' name='mail' />
                    <div className={`${style.link} ${style.active_link}`}>
                        <Link href='/app/menu'>Меню</Link>
                    </div>
                    <IconComponent href='#' name='notification' />
                </nav>
                <div className={style.navbar__logo_profile}>
                    <ProfilePhoto />
                </div>
            </div>
        </div>
    )
}

export default NavbarApp;