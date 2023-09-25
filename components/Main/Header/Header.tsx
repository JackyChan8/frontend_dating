import style from './Header.module.scss';

import Link from 'next/link';
import LogoCompany from './Logo/Logo';
import SidebarIcon from './Sidebar/SidebarIcon';
import IconComponent from '@/components/Main/Utils/Icons';
import ButtonComponent from '@/components/Main/Utils/Buttons';

const Header: React.FC = () => {
    return (
        <header>
            <div className={style.company}>
                <Link href="/">
                    <LogoCompany />
                </Link>
                <p className={style.company__name}>Company.co</p>
            </div>
            <div className={style.tab}>
                <h2>Company.co</h2>
            </div>
            <nav className={style.navbar}>
                <IconComponent name='plus' href="#" text='Преимущества' class_name='navbar__link' />
                <IconComponent name='info' href="#" text='О нас' class_name='navbar__link' />
            </nav>
            <div className={style.btn_block}>
                <ButtonComponent name='join' text='Присоединиться' />
                <SidebarIcon classBtn={style.btn_sidebar_open} />
            </div>
        </header>
    )
}

export default Header;