'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Toast } from 'primereact/toast';

import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';

import { useAppDispatch } from '@/app/redux/store';
import { selectAuth } from '@/app/redux/auth/selectors';
import { setIsSignIn, setMessage } from '@/app/redux/auth/slice';
import { reqSignIn } from '@/app/redux/auth/asyncActions';

import styles from './Form.module.scss';

type FormProps = {
  textBtn: string;
};

const Form: React.FC<FormProps> = ({ textBtn }: FormProps) => {
  console.log('SignIn Form');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { message, isLoading, isSignIn, statusCode } = useSelector(selectAuth);

  const toast = React.useRef<Toast>(null);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const showMessage = (
    severity: 'success' | 'info' | 'warn' | 'error' | undefined,
    summary: string,
    detail: string,
    life: number,
  ) => {
    toast.current?.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: life,
    });
  };

  const submitSignInForm = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (email.length === 0 || password.length === 0) {
        showMessage('warn', 'Предупреждение', 'Не все поля заполнены', 2000);
      } else {
        const formData = {
          email: email,
          password: password,
        };
        await dispatch(reqSignIn(formData));
      }
    } catch (error) {
      console.log('error in submitSignInForm -->', error);
    }
  };

  React.useEffect(() => {
    if (isSignIn === true && statusCode === 200) {
      showMessage('success', 'Успех', 'Успешная авторизация', 15000);
      setTimeout(() => {
        router.push('/questionnaire');
      }, 16000);
    } else {
      if (message.length > 0) {
        showMessage('warn', 'Предупреждение', message, 12000);
      }
    }
    return () => {
      dispatch(setIsSignIn(false));
      dispatch(setMessage(''));
    };
  }, [dispatch, isSignIn, message, statusCode, router]);

  return (
    <div>
      <form className={styles.form_block} onSubmit={submitSignInForm}>
        <InputText
          placeholder={'E-mail'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{textBtn}</button>
      </form>
      <div>
        <Toast ref={toast} position="top-right" />
      </div>
      {isLoading && (
        <div className={styles.loading}>
          <ProgressSpinner />
        </div>
      )}
    </div>
  );
};

export default Form;
