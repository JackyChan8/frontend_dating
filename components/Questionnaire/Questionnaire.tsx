"use client";
import style from "./Questionnaire.module.scss";

import { useState, FormEvent } from "react";

import StepsForm from "./StepsForm/StepsForm";
import StepOne from "./Content/StepOne/StepOne";
import StepTwo from "./Content/StepTwo/StepTwo";
import StepFour from "./Content/StepFour/StepFour";
import StepThree from "./Content/StepThree/StepThree";
import TitleCompanyName from "./Content/TitleCompanyName/TitleCompanyName";
import { FormQuestionnaire } from "@/components/Questionnaire/types/types";

const Questionnaire = () => {
  console.log('Questionnaire')
  // Steps
  const [step, setStep] = useState<number>(0);
  // Form
  const [form, setForm] = useState<FormQuestionnaire>({
    firstName: '',
    birthday: '',
    sex: '',
    height: null,
    weight: null,
    bodyBuild: '',
    eyeColor: '',
    aboutMe: '',
    interests: [],
    character: '',
    familyStatus: '',
    orientation: '',
    looking: [],
    qualities: [],
    partnerDesc: '',
  });

  const onUpdateField = (e: FormEvent) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  return (
    <div className={style.questionnaire_block}>
      <div className={style.questionnaire__header}>
        <TitleCompanyName />
      </div>
      <div className={style.questionnaire__steps}>
        <StepsForm step={step} />
      </div>
      <div className={style.questionnaire__content}>
        {step === 0 && (
          <StepOne
            setStep={setStep}
            form={form}
            onUpdateField={onUpdateField}
          />
        )}
        {step === 1 && (
          <StepTwo
            setStep={setStep}
            form={form}
            onUpdateField={onUpdateField}
          />
        )}
        {step === 2 && (
          <StepThree
            setStep={setStep}
            form={form}
            onUpdateField={onUpdateField}
          />
        )}
        {step === 3 && <StepFour />}
      </div>
    </div>
  );
};

export default Questionnaire;
