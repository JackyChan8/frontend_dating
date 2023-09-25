import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { reqSignUp, reqSignIn } from './asyncActions';
import { AuthSliceState } from './types';

const initialState: AuthSliceState = {
  message: '',
  isLoading: false,
  isSignUp: false,
  isSignIn: false,
  statusCode: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsSignUp(state, action: PayloadAction<boolean>) {
      state.isSignUp = action.payload;
    },
    setIsSignIn(state, action: PayloadAction<boolean>) {
      state.isSignIn = action.payload;
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    // -------------------------reqSignUp--------------------------------
    builder.addCase(reqSignUp.pending, (state, action) => {
      state.isLoading = true;
      state.isSignUp = false;
      state.message = '';
      state.statusCode = null;
    });
    builder.addCase(reqSignUp.fulfilled, (state, action) => {
      state.isSignUp = action.type.includes('sign-up');
      state.message = action.payload.message;
      state.statusCode = action.payload.statusCode;
      state.isLoading = false;
    });
    builder.addCase(reqSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.isSignUp = false;
      state.message = '';
      state.statusCode = null;
    });
    // -------------------------reqSignIn--------------------------------
    builder.addCase(reqSignIn.pending, (state, action) => {
      state.isLoading = true;
      state.isSignIn = false;
      state.message = '';
      state.statusCode = null;
    });
    builder.addCase(reqSignIn.fulfilled, (state, action) => {
      state.isSignIn = action.type.includes('sign-in');
      state.message = action.payload.message;
      state.statusCode = action.payload.statusCode;
      if (action.payload.access_token) {
        localStorage.setItem('token', action.payload.access_token);
      }
      state.isLoading = false;
    });
    builder.addCase(reqSignIn.rejected, (state, action) => {
      state.isLoading = false;
      state.isSignIn = false;
      state.message = '';
      state.statusCode = null;
    });
  },
});

export const { setIsSignUp, setIsSignIn, setMessage } = authSlice.actions;

export default authSlice.reducer;
