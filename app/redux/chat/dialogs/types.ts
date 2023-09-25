type Messages = {
  read: boolean;
  author: { id: number };
};

type Photos = {
  id: number;
  filename: string;
  isAvatar: boolean;
};

type User = {
  id: number;
  photos: Array<Photos>;
  profile: { firstName: string };
};

type Dialog = {
  id: number;
  lastMessage: string;
  messages: Array<Messages>;
  author: User;
  partner: User;
  unreadCount: number;
};

export interface DialogState {
  dialogs: Array<Dialog>;
  status: string;
  error: string | null;
  isLoading: boolean;
  currentDialogId: number | null;
}

export type DialogUpdateLastMessage = {
  text: string;
  dialogId?: number;
}

export type DialogAddMessage = {
  dialogId: number;
  author: number;
}

export type DialogCountMessages = {
  dialogId: number;
};
