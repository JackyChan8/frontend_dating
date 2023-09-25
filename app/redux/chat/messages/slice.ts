import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { reqGetMessages } from "./asyncActions";

import { Message, MessageSliceState } from "./types";

const initialState: MessageSliceState = {
  messages: [],
  status: 'idle',
  error: null,
  isLoading: true,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    // Добавление сообщения
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reqGetMessages.pending, (state, action) => {
      state.isLoading = true;
      state.status = 'loading';
    });
    builder.addCase(reqGetMessages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = 'succeeded';
      state.messages = action.payload.data;
    });
    builder.addCase(reqGetMessages.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ? action.error.message : 'Error';
    });
  },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
