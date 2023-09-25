"use client";
import style from "./StepOneForm.module.scss";

import { useState, useRef, Dispatch, SetStateAction, FormEvent } from "react";

import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

import { sexData, Data } from "@/components/Questionnaire/types/data";
import { FormQuestionnaire } from "@/components/Questionnaire/types/types";

type Props = {
  onUpdateField: any;
  form: FormQuestionnaire;
  setStep: Dispatch<SetStateAction<number>>;
};

const StepOneForm = ({ form, onUpdateField, setStep }: Props) => {
  // Errors
  const [errFirstName, setErrFirstName] = useState(false);
  const [errBirthday, setErrBirthday] = useState(false);
  const [errSex, setErrSex] = useState(false);
  const toast = useRef<Toast>(null);

  const selectedSexTemplate = (option: Data, props: any) => {
    if (option) {
      return (
        <div className={style.template_selected}>
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const panelFooterTemplate = () => {
    return (
      <div className="py-2 px-3">
        {form.sex ? (
          <span>
            <b>{form.sex}</b> выбран.
          </span>
        ) : (
          "Пол не выбран."
        )}
      </div>
    );
  };

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

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    setErrFirstName(false);
    setErrBirthday(false);
    setErrSex(false);

    if (form.firstName.length < 8) {
      setErrFirstName(true);
      showMessage(
        "error",
        "Предупреждение",
        "Имя должно быть 8 и более сиволов",
        5000
      );
    } else if (!form.birthday) {
      setErrBirthday(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Дату Рождения",
        5000
      );
    } else if (!form.sex) {
      setErrSex(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Ваш Пол",
        5000
      );
    } else {
      setStep(1);
    }
  };

  return (
    <>
      <div className={style.form}>
        <div className={style.firstName}>
          <label htmlFor="firstName">
            Пожалуйста, введите Ваше{" "}
            <span className={`${errFirstName ? style.invalid_field : ""}`}>
              Имя
            </span>
          </label>
          <InputText
            id="firstName"
            name="firstName"
            autoFocus={true}
            onChange={onUpdateField}
            value={form.firstName}
          />
        </div>
        <div className={style.birthday}>
          <label htmlFor="birthday">
            Пожалуйста, введите Вашу{" "}
            <span className={`${errBirthday ? style.invalid_field : ""}`}>
              Дату Рождения
            </span>
          </label>
          <Calendar
            name="birthday"
            inputId="birthday"
            dateFormat="dd/mm/yy"
            onChange={onUpdateField}
            value={form.birthday}
          />
        </div>
        <div className={style.sex}>
          <label>
            Пожалуйста, выберите Ваш{" "}
            <span className={`${errSex ? style.invalid_field : ""}`}>Пол</span>
          </label>
          <Dropdown
            name="sex"
            options={sexData}
            optionLabel="name"
            value={form.sex}
            onChange={onUpdateField}
            className={style.dropdown}
            panelClassName={style.panel}
            valueTemplate={selectedSexTemplate}
            panelFooterTemplate={panelFooterTemplate}
          />
        </div>
        <div className={style.form_button}>
          <button type="button" onClick={onSubmitForm}>
            Дальше
          </button>
        </div>
      </div>
      <div>
        <Toast ref={toast} position="top-right" />
      </div>
    </>
  );
};

export default StepOneForm;
