import style from './Forget.module.scss';

import FormAuth from '@/components/Auth/Form/Form';
import Hint from '@/components/Auth/Forget/Hint/Hint';
import IconComponent from '@/components/Main/Utils/Icons';

const Forget = () => {
    return (
        <div className={style.forget_block}>
            <IconComponent href='/auth/signin' name='cross' class_name={style.cross_icon} />
            <Hint title='Восстановить пароль' desc='Введите Ваш номер телефона, чтобы сбросить пароль' />
            <FormAuth textBtn='Восстановить' />
        </div>
    )
}

export default Forget;