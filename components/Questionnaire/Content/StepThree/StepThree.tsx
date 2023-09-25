import style from './StepThree.module.scss';

import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import StepThreeForm from './StepThreeForm/StepThreeForm';
import iconStepThree from '@/public/questionnaire/search.svg';

import { FormQuestionnaire } from "@/components/Questionnaire/types/types";

type Props = {
    onUpdateField: any,
    form: FormQuestionnaire,
    setStep: Dispatch<SetStateAction<number>>,
}

const StepThree = (props: Props) => {
    return (
        <div className={style.step_three}>
            <div className={style.form}>
                <StepThreeForm {...props} />
            </div>
            <div className={style.image}>
                <Image src={iconStepThree} alt='image-step-three'></Image>
            </div>
        </div>
    )
}

export default StepThree;