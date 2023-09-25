import DialogService from "./service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllDialogs = createAsyncThunk('chat/get/dialogs', async () => {
    const response = await DialogService.getAll();
    return response;
});
