"use client";
import { useRef, useState, Dispatch, SetStateAction, FormEvent } from "react";
import style from "./StepTwoForm.module.scss";

import { Toast } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea";

import {
  heightPerson,
  weightPerson,
  bodyTypePerson,
  eyeColorPerson,
  characterPerson,
  familyStatusPerson,
  orientationPerson,
  interestsPerson,
} from "@/components/Questionnaire/types/data";
import { FormQuestionnaire } from "@/components/Questionnaire/types/types";

type Props = {
  onUpdateField: any;
  form: FormQuestionnaire;
  setStep: Dispatch<SetStateAction<number>>;
};

const StepTwoForm = ({ setStep, form, onUpdateField }: Props) => {
  // Errors
  const [errHeight, setErrHeight] = useState(false);
  const [errWeight, setErrWeight] = useState(false);
  const [errBodyBuild, setErrBodyBuild] = useState(false);
  const [errEyeColor, setErrEyeColor] = useState(false);
  const [errAboutMe, setErrAboutMe] = useState(false);
  const [errInterests, setErrInterests] = useState(false);
  const [errCharacter, setErrCharacter] = useState(false);
  const [errFamilyStatus, setErrFamilyStatus] = useState(false);
  const [errOrientation, setErrOrientation] = useState(false);

  // Form
  const toast = useRef<Toast>(null);

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
    setErrHeight(false);
    setErrWeight(false);
    setErrBodyBuild(false);
    setErrEyeColor(false);
    setErrAboutMe(false);
    setErrInterests(false);
    setErrCharacter(false);
    setErrFamilyStatus(false);
    setErrOrientation(false);

    if (!form.height) {
      setErrHeight(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Ваш Рост",
        5000
      );
    } else if (!form.weight) {
      setErrWeight(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Ваш Вес",
        5000
      );
    } else if (!form.bodyBuild) {
      setErrBodyBuild(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Ваше Телосложение",
        5000
      );
    } else if (!form.eyeColor) {
      setErrEyeColor(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Ваш Цвет Глаз",
        5000
      );
    } else if (!form.aboutMe) {
      setErrAboutMe(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Краткую информацию о Вас",
        5000
      );
    } else if (!form.interests.length) {
      setErrInterests(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Ваши интересы",
        5000
      );
    } else if (!form.character) {
      setErrCharacter(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Ваш Характер",
        5000
      );
    } else if (!form.familyStatus) {
      setErrFamilyStatus(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Ваше Семейное Положение",
        5000
      );
    } else if (!form.orientation) {
      setErrOrientation(true);
      showMessage(
        "error",
        "Предупреждение",
        "Пожалуйста Укажите Вашу Ориентацию",
        5000
      );
    } else {
      setStep(2);
    }
  };

  const onSubmitFormBack = () => {
    setStep(0);
  }

  return (
    <>
      <div className={style.personal_information}>
        <div className={style.appearance}>
          <div className={style.appearance__title}>
            <h2>Внешность</h2>
          </div>
          <div className={style.appearance__height}>
            <label htmlFor="height">
              Пожалуйста, выберите Ваш <span className={`${errHeight ? style.invalid_field : ""}`}>Рост</span>
            </label>
            <Dropdown
              editable
              id="height"
              name="height"
              options={heightPerson}
              optionLabel="name"
              value={form.height}
              className={style.dropdown}
              onChange={onUpdateField}
            />
          </div>
          <div className={style.appearance__weight}>
            <label htmlFor="weight">
              Пожалуйста, выберите Ваш <span className={`${errWeight ? style.invalid_field : ""}`}>Вес</span>
            </label>
            <Dropdown
              editable
              id="weight"
              name="weight"
              options={weightPerson}
              optionLabel="name"
              value={form.weight}
              className={style.dropdown}
              onChange={onUpdateField}
            />
          </div>
          <div className={style.appearance__body_type}>
            <label htmlFor="bodyType">
              Пожалуйста, выберите тип Вашего <span className={`${errBodyBuild ? style.invalid_field : ""}`}>Телосложения</span>
            </label>
            <Dropdown
              editable
              id="bodyType"
              name="bodyBuild"
              options={bodyTypePerson}
              optionLabel="name"
              value={form.bodyBuild}
              className={style.dropdown}
              onChange={onUpdateField}
            />
          </div>
          <div className={style.appearance__eye_color}>
            <label htmlFor="eyeColor">
              Пожалуйста, выберите Ваш <span className={`${errEyeColor ? style.invalid_field : ""}`}>Цвет Глаз</span>
            </label>
            <Dropdown
              editable
              id="eyeColor"
              name="eyeColor"
              options={eyeColorPerson}
              optionLabel="name"
              value={form.eyeColor}
              className={style.dropdown}
              onChange={onUpdateField}
            />
          </div>
          <div className={style.form_button}>
            <button onClick={onSubmitForm}>Дальше</button>
            <button onClick={onSubmitFormBack}>Назад</button>
          </div>
        </div>
        <div className={style.about_me}>
          <div className={style.appearance__title}>
            <h2>О себе</h2>
          </div>
          <div className={style.about_me__short_info}>
            <label htmlFor="infoText">
              Пожалуйста, заполните <span className={`${errAboutMe ? style.invalid_field : ""}`}>Краткую информацию</span> о Вас
            </label>
            <InputTextarea
              id="infoText"
              name="aboutMe"
              value={form.aboutMe}
              onChange={onUpdateField}
            />
          </div>
          <div className={style.about_me__interests}>
            <label htmlFor="interests">
              Пожалуйста, выберите подходящие Вам <span className={`${errInterests ? style.invalid_field : ""}`}>Интересы</span>
            </label>
            <MultiSelect
              id="interests"
              name="interests"
              value={form.interests}
              onChange={onUpdateField}
              options={interestsPerson}
              optionLabel="name"
              display="chip"
              maxSelectedLabels={3}
              className={style.multiselect}
            />
          </div>
          <div className={style.about_me__character}>
            <label htmlFor="character">
              Пожалуйста, выберите тип Вашего <span className={`${errCharacter ? style.invalid_field : ""}`}>Характера</span>
            </label>
            <Dropdown
              editable
              id="character"
              name="character"
              options={characterPerson}
              optionLabel="name"
              value={form.character}
              className={style.dropdown}
              onChange={onUpdateField}
            />
          </div>
          <div className={style.about_me__family_status}>
            <label htmlFor="familyStatus">
              Пожалуйста, выберите статус Вашего{" "}
              <span className={`${errFamilyStatus ? style.invalid_field : ""}`}>Семейного Положения</span>
            </label>
            <Dropdown
              editable
              id="familyStatus"
              name="familyStatus"
              options={familyStatusPerson}
              optionLabel="name"
              value={form.familyStatus}
              className={style.dropdown}
              onChange={onUpdateField}
            />
          </div>
          <div className={style.about_me__orientation}>
            <label htmlFor="orientation">
              Пожалуйста, выберите тип Вашей <span className={`${errOrientation ? style.invalid_field : ""}`}>Ориентации</span>
            </label>
            <Dropdown
              editable
              id="orientation"
              name="orientation"
              options={orientationPerson}
              optionLabel="name"
              value={form.orientation}
              className={style.dropdown}
              onChange={onUpdateField}
            />
          </div>
        </div>
      </div>
      <div>
        <Toast ref={toast} position="top-right" />
      </div>
    </>
  );
};

export default StepTwoForm;
