import style from '../Forget.module.scss';

import IconComponent from "@/components/Main/Utils/Icons";
import Hint from '@/components/Auth/Forget/Hint/Hint'
import FormAuth from '@/components/Auth/Form/Form';

const ChangePassword = () => {
    return (
        <div className={style.forget_block}>
            <IconComponent href='/auth/signin' name='cross' class_name={style.cross_icon} />
            <Hint title='Создание нового пароля' desc='Введите новый пароль' />
            <FormAuth textBtn='Изменить' />
        </div>
    )
}

export default ChangePassword;