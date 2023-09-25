import style from '../Auth.module.scss';

import Link from 'next/link';
import Form from '@/components/Auth/Signin/Form/Form';
import LogoCompany from '@/components/Main/Header/Logo/Logo';
import AppStore from '@/components/Main/Footer/AppStore/AppStore';

const Signin = () => {
  console.log('Signin');
  return (
    <div className={style.auth_block}>
      <div className={style.logo}>
        <LogoCompany />
      </div>

      <Form textBtn="Войти" />

      <div className={style.forget_password}>
        <Link href="/auth/forget">Забыли пароль?</Link>
      </div>

      <div className={style.intermediate}>
        <div className={style.line_left}></div>
        <p>Или</p>
        <div className={style.line_right}></div>
      </div>

      <div className={style.register}>
        <p>У вас нет аккаунта?</p>
        <Link href="/auth/signup">Зарегистрироваться</Link>
      </div>

      <div className={style.mobile_app_logo}>
        <AppStore />
      </div>
    </div>
  );
};

export default Signin;
