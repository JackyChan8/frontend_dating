'use client';
import style from './HelpForm.module.scss';

import { useState } from 'react';

import { InputText } from "primereact/inputtext";
import { MultiSelect } from 'primereact/multiselect';
import { InputTextarea } from 'primereact/inputtextarea';

const HelpForm = () => {
    const [selectedProblems, setSelectedProblems] = useState(null);
    const [header, setHeader] = useState('');
    const [description, setDescription] = useState('');

    const problems = [
        { name: 'Проблема с приложением', code: 'App' },
        { name: 'Проблема с чатом', code: 'Chat' },
        { name: 'Другое', code: 'Other' },
    ];

    return (
        <form action='#'>
            <div className={style.form_header}>
                <label htmlFor="header">Пожалуйста, введите Заголовок обращения</label>
                <InputText
                    value={header}
                    onChange={(e) => setHeader(e.target.value)}
                    id="header"
                    aria-describedby="header-help"
                />
            </div>
            <div className={style.form_tags}>
                <label htmlFor="tags">Пожалуйста, укажите несколько основных тегов</label>
                <MultiSelect
                    id="tags"
                    value={selectedProblems}
                    onChange={(e) => setSelectedProblems(e.value)}
                    options={problems}
                    optionLabel="name"
                    panelClassName={style.panel_multi_select}
                    maxSelectedLabels={3}
                    className={style.multi_select}
                    itemClassName={style.item_multi_select}
                />
            </div>
            <div className={style.form_description}>
                <label htmlFor="description">Пожалуйста, опишите вашу проблему</label>
                <InputTextarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className={style.form_button}>
                <button type='submit'>Отправить</button>
            </div>
        </form>
    )
}

export default HelpForm;