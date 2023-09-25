import MessageService from "./service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const reqGetMessages = createAsyncThunk('chat/get/messages', async (dialogID: number | null) => {
    const response = await MessageService.get(dialogID);
    return response;
});