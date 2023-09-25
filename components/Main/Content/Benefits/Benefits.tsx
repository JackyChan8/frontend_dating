import style from './Benefits.module.scss';

import Gallery from './Galleria/Galleria';
import ButtonComponent from '@/components/Main/Utils/Buttons';

const Benefits = () => {
    return (
        <section className={style.benefits}>
            <div className={style.benefits__description}>
                <h2 className={style.benefits__title}>Наши преимущества</h2>
                <p className={style.benefits__text}>Мы превосходим наших конкурентов по следующему категориям:</p>
                <ButtonComponent name='join' text='Присоединиться' />
            </div>
            <div className={style.benefits__description__mobile}>
                <h2 className={style.benefits__title}>Наши преимущества</h2>
                <p className={style.benefits__text}>Мы превосходим наших конкурентов по следующему категориям:</p>
            </div>
            <Gallery classDiv='card' />
            <div className={style.benefits__btn__mobile}>
                <ButtonComponent name='join' text='Присоединиться' />
            </div>
        </section>
    )
}

export default Benefits;