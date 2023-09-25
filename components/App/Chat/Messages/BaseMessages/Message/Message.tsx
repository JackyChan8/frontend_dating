import style from "./Message.module.scss";

import { PropsSend, PropsReceive } from "@/components/App/Chat/types/types";

const MessageReceive = ({ message, createAt }: PropsReceive) => {
  return (
    <div className={style.send_time}>
      <div className={style.receiver_chat}>
        <div className={style.receiver_msg}>{message}</div>
        <div className={style.send_time}>{createAt}</div>
      </div>
    </div>
  );
};

const MessageSend = ({ message, createAt }: PropsSend) => {
  return (
    <div className={style.sender}>
      <div className={style.sender_chat}>
        <div className={style.sender_msg}>{message}</div>
        <div className={style.send_time}>{createAt}</div>
      </div>
    </div>
  );
};

export { MessageReceive, MessageSend };
