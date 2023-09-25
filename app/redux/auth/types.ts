export interface AuthSliceState {
  message: string;
  isLoading: boolean;
  isSignUp: boolean;
  isSignIn: boolean;
  statusCode: number | null;
}
