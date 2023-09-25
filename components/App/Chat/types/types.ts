type Photos = {
  id: number;
  filename: string;
  isAvatar: boolean;
};

type UserDialog = {
  id: number;
  photos: Array<Photos>;
  profile: { firstName: string };
};

type UserMessage = {
  id: number;
  photos: Array<Photos>;
};

type GetMessageChatDialog = {
  id: number;
  author: { id: number };
  partner: { id: number };
};

export type Dialog = {
  id: number;
  lastMessage: string;
  author: UserDialog;
  partner: UserDialog;
  unreadCount: number;
};

export type Message = {
  id: number;
  text: string;
  read: boolean;
  created_at: string;
  author: UserMessage;
};

export type GetMessageChat = {
  id: number;
  text: string;
  read: boolean;
  created_at: string;
  author: UserMessage;
  dialog: GetMessageChatDialog;
};

export type ChangeReadMessageChat = {
  user: number;
  dialog: number;
};

export type ErrorMessage = {
  userId: number;
  message: string;
};

export type PropsReceive = {
  createAt: string;
  message: string;
};

export type PropsSend = {
  message: string;
  createAt: string;
};
