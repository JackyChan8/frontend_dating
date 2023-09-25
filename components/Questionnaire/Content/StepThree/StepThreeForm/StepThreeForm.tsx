"use client";
import style from "./StepThreeForm.module.scss";

import React, {
  useRef,
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
  useEffect,
} from "react";

import { Toast } from "primereact/toast";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea";

import {
  personSearch,
  personsQualities,
} from "@/components/Questionnaire/types/data";
import { FormQuestionnaire } from "@/components/Questionnaire/types/types";

import { useAppDispatch } from "@/app/redux/store";
import { selectProfile } from "@/app/redux/profile/selectors";
import { useSelector } from "react-redux";
import { reqCreateProfile } from "@/app/redux/profile/asyncActions";

type Props = {
  form: FormQuestionnaire;
  onUpdateField: any;
  setStep: Dispatch<SetStateAction<number>>;
};

const StepThreeForm = ({ form, onUpdateField, setStep }: Props) => {
  // Errors
  const [errLooking, setErrLooking] = useState(false);
  const [errQualities, setErrQualities] = useState(false);
  const [errPartnerDesc, setErrPartnerDesc] = useState(false);
  const toast = useRef<Toast>(null);
  // Redux
  const dispatch = useAppDispatch();
  const { message, statusCode, isLoading } = useSelector(selectProfile);

  const showMessage = (
    severity: "success" | "info" | "warn" | "error" | undefined,
    summary: string,
    detail: string,
    life: number
  ) => {
    toast.current?.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: life,
    });
  };

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    setErrLooking(false);
    setErrQualities(false);
    setErrPartnerDesc(false);

    if (!form.looking.length) {
      setErrLooking(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста укажите кого Хотите Найти",
        5000
      );
    } else if (!form.qualities.length) {
      setErrQualities(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста укажите Качества Партнера",
        5000
      );
    } else if (!form.partnerDesc) {
      setErrPartnerDesc(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста опишите Вашего Идеального Партнера",
        5000
      );
    } else {
      await dispatch(reqCreateProfile(form));
    }
  };

  const onSubmitFormBack = () => {
    setStep(1);
  };

  useEffect(() => {
    if (statusCode === 200) {
      showMessage("success", "Успех", message, 3000);
      setTimeout(() => {
        setStep(3);
      }, 4000);
    } else {
      if (message.length > 0) {
        showMessage("warn", "Предупреждение", message, 4000);
      }
    }
  }, [message, statusCode, isLoading, setStep]);

  return (
    <div className={style.form}>
      <div className={style.planSearch}>
        <label htmlFor="planSearch">
          Пожалуйста, выберите кого Вы планируете{" "}
          <span className={`${errLooking ? style.invalid_field : ""}`}>
            Найти
          </span>
        </label>
        <MultiSelect
          id="planSearch"
          name="looking"
          value={form.looking}
          onChange={onUpdateField}
          options={personSearch}
          optionLabel="name"
          display="chip"
          maxSelectedLabels={3}
          className={style.multiselect}
        />
      </div>
      <div className={style.qualitiesPartner}>
        <label htmlFor="qualities">
          Пожалуйста, выберите важные{" "}
          <span className={`${errQualities ? style.invalid_field : ""}`}>
            Качества
          </span>{" "}
          Вашего партнера
        </label>
        <MultiSelect
          id="qualities"
          name="qualities"
          value={form.qualities}
          onChange={onUpdateField}
          options={personsQualities}
          optionLabel="name"
          display="chip"
          maxSelectedLabels={3}
          className={style.multiselect}
        />
      </div>
      <div className={style.description_partner}>
        <label htmlFor="idealPartner">
          Пожалуйста, опишите Вашего{" "}
          <span className={`${errPartnerDesc ? style.invalid_field : ""}`}>
            Идеального Партнера
          </span>
        </label>
        <InputTextarea
          id="idealPartner"
          name="partnerDesc"
          value={form.partnerDesc}
          onChange={onUpdateField}
        />
      </div>
      <div className={style.form_button}>
        <button onClick={onSubmitForm}>Дальше</button>
        <button onClick={onSubmitFormBack}>Назад</button>
      </div>
      <div>
        <Toast ref={toast} position="top-right" />
      </div>
    </div>
  );
};

export default StepThreeForm;
