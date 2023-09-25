import { createSlice } from "@reduxjs/toolkit";

import { UserSliceState } from "./types";
import { parseJwt } from '@/utils/parseJwt';

const initialState: UserSliceState = {
    userID: 0,
    isLoading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        parseJwT: (state) => {
            const token = localStorage.getItem("token");
            const data = parseJwt(token);
            state.userID = data.sub;
        }
    },
})

export const { parseJwT } = userSlice.actions;

export default userSlice.reducer;
