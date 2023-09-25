import $api from '@/http/index';

type SignUpFormData = {
  email: string;
  password: string;
  confirm_password: string;
};

type SignInFormData = {
  email: string;
  password: string;
};

export default class AuthService {
  static async signUp(formData: SignUpFormData) {
    const res =  await $api.post('auth/sign-up', formData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
    return res;
  }
  static async signIn(formData: SignInFormData) {
    const res = await $api.post('auth/sign-in', formData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    })
    return res;
  }
}
