import style from '../Forget.module.scss';

import IconComponent from '@/components/Main/Utils/Icons';
import FormAuth from '@/components/Auth/Form/Form';
import Hint from '@/components/Auth/Forget/Hint/Hint'

const ConfirmCode = () => {
    return (
        <div className={style.forget_block}>
            <IconComponent href='/auth/signin' name='cross' class_name={style.cross_icon} />
            <Hint title='Подтверждения кода' desc='Подтвердите код, который мы отправили вам на номер +79826122793' />
            <FormAuth textBtn='Подтвердить' />
        </div>
    )
}

export default ConfirmCode;