import style from './Chat.module.scss';

import Header from './Header/Header';
import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';
import WriteMessage from './WriteMessage/WriteMessage';

type Props = {
    show: boolean,
    setShow: any,
}

const Chat = ({ show, setShow }: Props) => {
    return (
        <div className={style.chat}>
            <div className={style.chat__header}>
                <Header show={show} setShow={setShow} />
                <Dialogs />
            </div>
            <Messages />
            <WriteMessage />
        </div>
    )
}

export default Chat;