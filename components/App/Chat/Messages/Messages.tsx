'use client';
import style from "./Messages.module.scss";

import { useEffect } from "react";

import BaseMessages from "./BaseMessages/BaseMessages";

// Prime React
import { ProgressSpinner } from "primereact/progressspinner";

// Redux
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/redux/store";
import { selectUser } from "@/app/redux/user/selectors";
import { selectDialog } from "@/app/redux/chat/dialogs/selectors";
import { selectMessage } from "@/app/redux/chat/messages/selectors";
import { reqGetMessages } from "@/app/redux/chat/messages/asyncActions";


type Props = {
  showMessage: (severity: 'success' | 'info' | 'warn' | 'error' | undefined, summary: string, detail: string, life: number) => void;
};

const Messages = ({ showMessage }: Props) => {
  const dispatch = useAppDispatch();
  const { messages, isLoading, status } = useSelector(selectMessage);
  const { currentDialogId } = useSelector(selectDialog);
  const { userID } = useSelector(selectUser);

  // Redux
  useEffect(() => {
    if (currentDialogId) {
      dispatch(reqGetMessages(currentDialogId));
    }
  }, [dispatch, currentDialogId]);

  return (
    <div className={style.chat_user_message_panel}>
      {currentDialogId
      ? (
        isLoading ? <ProgressSpinner /> : status === 'succeeded' && (
          <BaseMessages
            userId={userID}
            currentDialogId={currentDialogId}
            messages={messages}
            showMessage={showMessage}
          />
        )
      )
      : (<p>Выберите диалог</p>)
      }
    </div>
  );
};

export default Messages;
