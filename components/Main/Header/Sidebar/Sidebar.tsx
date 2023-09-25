import style from './Sidebar.module.scss';


import Link from 'next/link';
import CrossBtn from './CrossBtn';
import ButtonComponent from '@/components/Main/Utils/Buttons';
import IconSocialNetwork from '@/components/Main/Utils/SocialNetwork';

const Sidebar = () => {
    return (
        <div id='sidebar-menu' className={style.sidebar}>
            <div className={style.sidebar__header}>
                <CrossBtn classBtn={style.cross_btn} />
            </div>
            <div className={style.sidebar__line}></div>
            <div className={style.sidebar__categories}>
                <ul>
                    <li>
                        <Link href='#' className={style.sidebar__category}>О нас</Link>
                    </li>
                    <li>
                        <Link href='#' className={style.sidebar__category}>Преимущество</Link>
                    </li>
                </ul>
            </div>
            <div className={style.sidebar__social_network}>
                <IconSocialNetwork name='twitter' classIcon={style.sidebar__social_link} />
                <IconSocialNetwork name='facebook' classIcon={style.sidebar__social_link} />
                <IconSocialNetwork name='instagram' classIcon={style.sidebar__social_link} />
                <IconSocialNetwork name='vkontakte' classIcon={style.sidebar__social_link} />
                <IconSocialNetwork name='youtube' classIcon={style.sidebar__social_link} />
            </div>
            <div className={style.sidebar__join}>
                <ButtonComponent name='join' text='Присоединиться' />
            </div>
        </div>
    )
}

export default Sidebar;