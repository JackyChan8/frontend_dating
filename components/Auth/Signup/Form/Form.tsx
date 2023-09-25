'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Toast } from 'primereact/toast';

import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';

import { useAppDispatch } from '@/app/redux/store';
import { selectAuth } from '@/app/redux/auth/selectors';
import { setIsSignUp, setMessage } from '@/app/redux/auth/slice';
import { reqSignUp } from '@/app/redux/auth/asyncActions';

import styles from './Form.module.scss';

type FormProps = {
  textBtn: string;
};

const Form: React.FC<FormProps> = ({ textBtn }: FormProps) => {
  console.log('Form SignUp');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { message, isLoading, isSignUp, statusCode } = useSelector(selectAuth);

  const toast = React.useRef<Toast>(null);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');

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

  const submitSignUpForm = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
        showMessage('warn', 'Предупреждение', 'Не все поля заполнены', 2000);
      } else {
        if (password !== confirmPassword) {
          showMessage('warn', 'Предупреждение', 'Пароли не совпадают', 2000);
        } else {
          const formData = {
            email: email,
            password: password,
            confirm_password: confirmPassword,
          };
          await dispatch(reqSignUp(formData));
        }
      }
    } catch (error) {
      console.log('error in submitSignUpForm -->', error);
    }
  };

  React.useEffect(() => {
    if (isSignUp === true && statusCode === 201) {
      showMessage('success', 'Успех', 'Успешная регистрация', 15000);
      showMessage('success', 'Успех', 'Мы отправили вам сообщение для подтверждения на электронную почту', 15000);
      setTimeout(() => {
        router.push('/auth/signin');
      }, 16000);
    } else {
      if (message.length > 0) {
        showMessage('warn', 'Предупреждение', message, 12000);
      }
    }
    return () => {
      dispatch(setIsSignUp(false));
      dispatch(setMessage(''));
    };
  }, [dispatch, isSignUp, message, statusCode, router]);

  return (
    <div>
      <form className={styles.form_block} onSubmit={submitSignUpForm}>
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
        <InputText
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
