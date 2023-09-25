'use client';
import style from './StepOne.module.scss';

import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

import StepOneForm from './StepOneForm/StepOneForm';
import iconStepOne from '@/public/questionnaire/main-info.svg';

import { FormQuestionnaire } from "@/components/Questionnaire/types/types";

type Props = {
    onUpdateField: any,
    form: FormQuestionnaire,
    setStep: Dispatch<SetStateAction<number>>,
}

const StepOne = (props: Props) => {
    return (
        <div className={style.step_one}>
            <div className={style.form}>
                <StepOneForm {...props} />
            </div>
            <div className={style.image}>
                <Image src={iconStepOne} alt='image-step-one'></Image>
            </div>
        </div>
    )
}

export default StepOne;