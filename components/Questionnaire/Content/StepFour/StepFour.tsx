import style from './StepFour.module.scss';

import Image from 'next/image';
import { useState } from 'react';

import iconStepFour from '@/public/questionnaire/photo.svg';

import VerifyCamera from '../VerifyCamera/VerifyCamera';

const StepFour = () => {
    const [showCamera, setShowCamera] = useState<null | boolean>(null);

    return (
        <div className={style.step_four}>
            {showCamera ? (
                <VerifyCamera />
            ) : (
                <>
                    <div className={style.title}>
                    <h2>Подтверждение личности</h2>
                    </div>
                    <div className={style.image}>
                        <Image src={iconStepFour} alt='image'></Image>
                    </div>
                    <div className={style.description}>
                        Наша цель - создать сообщество для общения с реальными людьми и для предотврощение мошейничества и Фейковых личностей.
                        Чтобы приблизиться к этой цели нам нужно подтвердить вашу личность с помощью веб-камеры.
                    </div>
                    <div className={style.form_button}>
                        <button onClick={() => setShowCamera(true)}>Подтвердить</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default StepFour;