'use client';
import style from './Calendar.module.scss';

import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

const CalendarIcon = () => {
    const [date, setDate] = useState<string | Date | Date[] | null>(null);
    return (
        <Calendar
            value={date}
            onChange={(e : CalendarChangeEvent) => setDate(e.value)}
            placeholder="Дата"
            className={style.calendar}
        />
    )
}

export default CalendarIcon;