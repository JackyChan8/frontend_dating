import style from './Success.module.scss';

import Link from "next/link"
import Hint from "@/components/Auth/Forget/Hint/Hint"


const Success = () => {
    return (
        <div className={style.success_message}>
            <Hint title='Пароль успешно изменен!' desc='Теперь вы можете использовать новый пароль для входа' />
            <Link href='/auth/signin'>
                <button type="submit">Отлично</button>
            </Link>
        </div>
    )
}

export default Success;