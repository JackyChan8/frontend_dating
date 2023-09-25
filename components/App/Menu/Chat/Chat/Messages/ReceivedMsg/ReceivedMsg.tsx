import style from './ReceivedMsg.module.scss';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
    avatar: string,
    name: string,
    message: string,
    urlPerson: string,
}

const ReceivedMsg = ({ avatar, name, message, urlPerson }: Props) => {
    return (
        <div className={style.message_received}>
            <div className={style.received__image}>
                <Link href={urlPerson}>
                    <Image src={avatar} alt='person'></Image>
                </Link>
            </div>
            <div className={style.received__person}>
                <div className={style.received__name}>
                    <h2>{name}</h2>
                </div>
                <div className={style.received__message}>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default ReceivedMsg;