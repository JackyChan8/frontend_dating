import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { reqCreateProfile, reqUpdateProfile } from "./asyncActions";
import { ProfileSliceState } from "./types";

const initialState: ProfileSliceState = {
  message: "",
  isLoading: false,
  statusCode: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    // ------------------------- Create Profile -------------------------
    builder.addCase(reqCreateProfile.pending, (state, action) => {
      state.message = "";
      state.isLoading = true;
      state.statusCode = null;
    });
    builder.addCase(reqCreateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.statusCode = action.payload.statusCode;
    });
    builder.addCase(reqCreateProfile.rejected, (state, action) => {
      state.message = "";
      state.isLoading = false;
      state.statusCode = null;
    });
  },
});

export const { setMessage } = profileSlice.actions;

export default profileSlice.reducer;
