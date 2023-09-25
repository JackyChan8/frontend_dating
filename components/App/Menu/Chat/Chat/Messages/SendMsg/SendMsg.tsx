import style from './SendMsg.module.scss';

type Props = {
    message: string,
}

const SendMsg = ({ message }: Props) => {
    return (
        <div className={style.message_send}>
            <div className={style.received__message}>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default SendMsg;