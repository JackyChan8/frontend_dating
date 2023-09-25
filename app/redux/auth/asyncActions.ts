import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import authService from '@/services/AuthService';

type ReqSignUpBody = {
  email: string;
  password: string;
  confirm_password: string;
};

type ReqSignInBody = {
  email: string;
  password: string;
};

export const reqSignUp = createAsyncThunk('auth/sign-up', async (formData: ReqSignUpBody) => {
  const response = await authService.signUp(formData);
  return response.data;
});

export const reqSignIn = createAsyncThunk('auth/sign-in', async (formData: ReqSignInBody) => {
  const response = await authService.signIn(formData);
  return response.data;
});
