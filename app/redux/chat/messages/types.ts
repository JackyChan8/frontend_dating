type Photos = {
  id: number;
  filename: string;
  isAvatar: boolean;
};

type User = {
  id: number;
  photos: Array<Photos>;
};

export type Message = {
  id: number;
  text: string;
  read: boolean;
  created_at: string;
  author: User;
  dialog: { id: number };
};

export interface MessageSliceState {
  messages: Array<Message>;
  status: string;
  error: string | null;
  isLoading: boolean;
}
