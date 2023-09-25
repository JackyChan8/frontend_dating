import style from './utils.module.scss';

import Link from 'next/link';

type Props = {
    name: string,
    class_name?: string,
    href?: string,
    text?: string,
    isLink?: boolean,
}

const icons = [
    { name: 'info', class: 'pi pi-info-circle' },
    { name: 'plus', class: 'pi pi-plus-circle' },
    { name: 'burger', class: 'pi pi-bars' },
    { name: 'cross', class: 'pi pi-times' },
    { name: 'mail', class: 'pi pi-envelope' },
    { name: 'notification', class: 'pi pi-bell' },
    { name: 'chats', class: 'pi pi-comments' },
    { name: 'attachment', class: 'pi pi-paperclip' },
    { name: 'send', class: 'pi pi-send' },
    { name: 'arrow-left', class: 'pi pi-arrow-circle-left' },
    { name: 'arrow-right', class: 'pi pi-arrow-circle-right' },
    { name: 'more', class: 'pi pi-ellipsis-h' },
];

const IconComponent = ({ name, href, text, class_name, isLink }: Props) => {
    return icons.map((el) => {
        const isIcon = name === el.name;
        
        return (isLink === false && isIcon)
        ? (
            <div key={name}>
                <i className={el.class}></i>
            </div>
        )
        : (isIcon && href) && (
            <Link key={name} className={class_name} href={href}>
                <i className={el.class}></i>
                {text && <p className={style.navbar__text}>{text}</p>}
            </Link>
        )
    })
}

export default IconComponent;