import style from '../Auth.module.scss';

import Link from 'next/link';
import Form from '@/components/Auth/Signup/Form/Form';
import LogoCompany from '@/components/Main/Header/Logo/Logo';
import AppStore from '@/components/Main/Footer/AppStore/AppStore';

const SignUp = () => {
  console.log('SignUp');
  return (
    <div className={style.auth_block}>
      <div className={style.logo}>
        <LogoCompany />
      </div>

      <Form textBtn="Зарегистрироваться" />

      <div className={style.intermediate}>
        <div className={style.line_left}></div>
        <p>Или</p>
        <div className={style.line_right}></div>
      </div>

      <div className={style.register}>
        <p>У вас есть аккаунта?</p>
        <Link href="/auth/signin">Войти</Link>
      </div>

      <div className={style.mobile_app_logo}>
        <AppStore />
      </div>
    </div>
  );
};

export default SignUp;
