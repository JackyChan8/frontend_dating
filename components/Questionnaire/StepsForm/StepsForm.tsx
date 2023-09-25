import style from './StepsForm.module.scss';

import { Steps } from 'primereact/steps';
import { MenuItem } from 'primereact/menuitem';

type Props = {
    step: number,
}

const StepsForm = ({ step }: Props) => {
    const items: MenuItem[] = [
        {
            label: 'Основная Информация'
        },
        {
            label: 'Личная Информация'
        },
        {
            label: 'Хочу Найти'
        },
        {
            label: 'Верификация'
        },
    ];

    return (
        <div className={style.steps_block}>
            <Steps
                className={style.steps}
                activeIndex={step}
                model={items}
            />
        </div>
    )
}

export default StepsForm;