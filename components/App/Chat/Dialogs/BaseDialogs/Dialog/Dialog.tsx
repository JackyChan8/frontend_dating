import style from "./Dialog.module.scss";

import Image from "next/image";

import { SERVER_URI } from "@/constants";

// Redux
import { setCurrentDialogId } from "@/app/redux/chat/dialogs/slice";

import { Dialog } from "@/components/App/Chat/types/types";

type Props = {
  dialog: Dialog;
  userID: number;
  dispatch: any;
  currentDialogId: number | null;
};

/**
 *
 * @param {any} data Dialog or Messages Chat by user
 * @param {number} userID User ID
 * @returns {string} The Path of Photo
 **/
const setAvatar = (data: any, userID: number): string => {
  let url = `${SERVER_URI}storage/photos/`;
  let photo = null;
  if (data.partner.id === userID) {
    photo = data.author.photos.filter((el: any) => el.isAvatar)[0].filename;
  } else {
    photo = data.partner.photos.filter((el: any) => el.isAvatar)[0].filename;
  }
  return url + photo;
};

const Dialog = ({ dialog, userID, dispatch, currentDialogId }: Props) => {
  return (
    <li
      onClick={() => dispatch(setCurrentDialogId(dialog.id))}
      style={{ cursor: "pointer" }}
      className={currentDialogId === dialog.id ? style.active_dialog : ""}
    >
      <div>
        <ul className={style.chat_detail}>
          <li>
            <Image
              alt="user"
              width={50}
              height={50}
              src={setAvatar(dialog, userID)}
              className={style.chat_profile_user}
            ></Image>
          </li>
          <li>
            <div className={style.chat_user_nm}>
              {dialog.partner.id === userID
                ? dialog.author.profile.firstName
                : dialog.partner.profile.firstName}
            </div>
            <div className={style.chat_desc}>{dialog.lastMessage}</div>
          </li>
          <li>
            {dialog.unreadCount ? (
              <div className={style.not_read_lable}>
                {dialog.unreadCount}
              </div>
            ) : <p></p>}
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Dialog;
