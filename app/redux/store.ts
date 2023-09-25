import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import auth from "./auth/slice";
import user from './user/slice';
import profile from "./profile/slice";
import dialog from './chat/dialogs/slice';
import message from './chat/messages/slice';

export const store = configureStore({
  reducer: {
    auth,
    user,
    profile,
    dialog,
    message,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
