import style from './Dialogs.module.scss';

import ChatOne from '@/public/app/MainMenu/Chat/1.jpg';
import ChatTwo from '@/public/app/MainMenu/Chat/2.jpg';
import ChatThree from '@/public/app/MainMenu/Chat/3.jpg';
import ChatFour from '@/public/app/MainMenu/Chat/4.jpg';
import ChatFive from '@/public/app/MainMenu/Chat/5.png';

import Dialog from './Dialog/Dialog';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <h2 className={style.sub_title}>Диалоги</h2>
            <div className={style.chats}>
                <Dialog avatar={ChatOne} alt='chat-1' />
                <Dialog avatar={ChatTwo} alt='chat-2' />
                <Dialog activeClass={style.chat_active} avatar={ChatThree} alt='chat-3' />
                <Dialog avatar={ChatFour} alt='chat-4' />
                <Dialog avatar={ChatFive} alt='chat-5' />
            </div>
        </div>
    )
}

export default Dialogs;