'use client';
import style from './Statistic.module.scss';

import { Knob } from 'primereact/knob';

type Props = {
    title: string,
    percent: number,
}

const Statistic = ({ title, percent }: Props) => {
    return (
        <div className={style.reputation_stats}>
            <h3>{title}</h3>
            <Knob
                value={percent}
                className={style.circle}
                valueTemplate={'{value}%'}
                valueColor={percent >= 90 ? '#38D600' : percent >= 75 ? '#BFF622' : '#FA4F4F'}
                readOnly
            ></Knob>
        </div>
    )
}

export default Statistic;