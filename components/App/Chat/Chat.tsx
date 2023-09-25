import style from "./Chat.module.scss";

import BaseChat from "./BaseChat/BaseChat";

const Chat = () => {
  return (
    <main>
      <section className={style.chat_section}>
        <article>
          <div className={style.msg_board}>
            <div className={style.container}>
              <BaseChat />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Chat;
