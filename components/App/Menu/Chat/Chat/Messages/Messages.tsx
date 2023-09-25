import style from './Messages.module.scss';

import ChatThree from '@/public/app/MainMenu/Chat/3.jpg';

import SendMsg from './SendMsg/SendMsg';
import ReceivedMsg from './ReceivedMsg/ReceivedMsg';

const Messages = () => {
    return (
        <div className={style.messages}>
            <ReceivedMsg
                avatar={ChatThree}
                name='Валентина'
                message='Привет, как дела?'
                urlPerson='#'
            />
            <SendMsg message='Все отлично! У тебя как?' />
        </div>
    )
}

export default Messages;