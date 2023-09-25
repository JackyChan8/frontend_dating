import style from "./ControlPanel.module.scss";

import IconComponent from "@/components/Main/Utils/Icons";

type Props = {
  sendMessage: any;
  setText: any;
  text: string;
};

const ControlPanel = ({ sendMessage, text, setText }: Props) => {

  return (
    <form
      onSubmit={sendMessage}
      className={`${style.write_comment} ${style.align_item_center}`}
    >
      <div className={style.form_group}>
        <input
          type="text"
          value={text}
          className={style.form_control}
          placeholder="Enter your message"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          disabled={!text.length && true}
          className={style.submit_comment}
        >
          <IconComponent name="send" isLink={false} />
        </button>
      </div>
    </form>
  );
};

export default ControlPanel;
