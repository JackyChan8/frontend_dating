import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getAllDialogs } from "./asyncActions";

import {
  DialogState,
  DialogUpdateLastMessage,
  DialogAddMessage,
  DialogCountMessages,
} from "./types";

const initialState: DialogState = {
  dialogs: [],
  status: "idle",
  error: null,
  isLoading: true,
  currentDialogId: null,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    // Установка значения выбранного диалога
    setCurrentDialogId: (state: DialogState, action: PayloadAction<number>) => {
      state.status = "loading";
      state.isLoading = false;
      state.currentDialogId = action.payload;
    },
    // Изменение последнего сообщения
    changeLastMessage: (
      state: DialogState,
      action: PayloadAction<DialogUpdateLastMessage>
    ) => {
      const dialogId = action.payload.dialogId
        ? action.payload.dialogId
        : state.currentDialogId;
      const idx = state.dialogs.findIndex((el) => el.id === dialogId);
      state.dialogs[idx].lastMessage = action.payload.text;
    },
    // Изменение кол-ва не прочитанных сообщений на 0
    setCountMessagesZero: (
      state: DialogState,
      action: PayloadAction<DialogCountMessages>
    ) => {
      const idx = state.dialogs.findIndex(
        (el) => el.id === action.payload.dialogId
      );
      state.dialogs[idx].unreadCount = 0;
    },
    // Прибавление значения счетчика не прочитанных сообщений на 1
    incrementCountMessages: (
      state: DialogState,
      action: PayloadAction<DialogCountMessages>
    ) => {
      const idx = state.dialogs.findIndex(
        (el) => el.id === action.payload.dialogId
      );
      state.dialogs[idx].unreadCount += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllDialogs.pending, (state) => {
      state.status = "loading";
      state.isLoading = true;
    });
    builder.addCase(getAllDialogs.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.dialogs = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getAllDialogs.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ? action.error.message : "Error";
      state.isLoading = false;
    });
  },
});

export const {
  setCurrentDialogId,
  changeLastMessage,
  setCountMessagesZero,
  incrementCountMessages,
} = dialogSlice.actions;

export default dialogSlice.reducer;
