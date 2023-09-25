import style from './StepTwo.module.scss';

import { Dispatch, SetStateAction } from 'react';

import StepTwoForm from './StepTwoForm/StepTwoForm';

import { FormQuestionnaire } from "@/components/Questionnaire/types/types";

type Props = {
    onUpdateField: any,
    form: FormQuestionnaire,
    setStep: Dispatch<SetStateAction<number>>,
};

const StepTwo = (props: Props) => {
    return (
        <div className={style.step_two}>
            <div className={style.form}>
                <StepTwoForm {...props} />
            </div>
        </div>
    )
}

export default StepTwo;