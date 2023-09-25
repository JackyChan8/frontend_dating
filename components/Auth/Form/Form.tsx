'use client';
import style from './Form.module.scss';

import { usePathname } from 'next/navigation';
import { InputText } from 'primereact/inputtext';

type Props = {
    textBtn: string,
}

const FormAuth = ({ textBtn }: Props) => {
    console.log('FormAuth');
    const pathname = usePathname();
    return (
        <form className={style.form_block}>

            <InputText
                type={pathname === '/auth/forget/pass' ? 'password' : 'number'}
                placeholder={pathname === '/auth/forget/code' ? 'Код' : pathname === '/auth/forget/pass' ? 'Новый пароль' : 'Номер телефона'}
            />
            {pathname === '/auth/forget/pass' && <InputText type="password" placeholder="Подтвердите Новый пароль" />}


            {(pathname === '/auth/signin' || pathname === '/auth/signup') && (
                <InputText type='password' placeholder='Пароль' />
            )}

            {pathname === '/auth/signup' && (
                <InputText type="password" placeholder="Подтвердите пароль" />
            )}

            <button type="submit">{textBtn}</button>
        </form>
    )
}

export default FormAuth;
