import { ProgressSpinner } from "primereact/progressspinner";

import BaseDialogs from "./BaseDialogs/BaseDialogs";

import { Dialog } from "@/components/App/Chat/types/types";

type Props = {
  status: string;
  dialogs: Dialog[]
  isLoading: boolean;
};

const Dialogs = ({ dialogs, status, isLoading }: Props) => {
  return isLoading ? (
    <ProgressSpinner />
  ) : status === "succeeded" || dialogs.length ? (
    <BaseDialogs />
  ) : (
    <p>У вас нет диалогов</p>
  );
};

export default Dialogs;
