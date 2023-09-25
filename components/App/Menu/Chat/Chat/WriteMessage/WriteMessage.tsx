import style from './WriteMessage.module.scss';

import Image from 'next/image';

import IconComponent from '@/components/Main/Utils/Icons';
import emojiIcon from '@/public/app/MainMenu/Chat/emoji.svg';


const WriteMessage = () => {
    return (
        <div className={style.write__message}>
            <div className={style.line}></div>
            <form action="#">
                <textarea placeholder="Написать сообщение..."></textarea>
                <button>
                    <IconComponent name='send' isLink={false} />
                </button>
            </form>
            <div className={style.panel__attach}>
                <button>
                    <Image src={emojiIcon} alt='emoji'></Image>
                </button>
                <button>
                    <IconComponent name='attachment' isLink={false} />
                </button>
            </div>
        </div>
    )
}

export default WriteMessage;