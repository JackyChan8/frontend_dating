import style from './utils.module.scss';

import Link from 'next/link';

type Props = {
    name: string,
    text: string,
};

const buttons = [
    { name: 'join', label: 'Присоединиться' },
];

const ButtonComponent = ({ name, text }: Props) => {
    return buttons.map((el) => {
        const isButton = name === el.name;
        return (
            isButton && (
                <Link href='/auth/signin'>
                    <button className={style.btn_connect}>{text}</button>
                </Link>
            )
        )
    })
};




export default ButtonComponent;