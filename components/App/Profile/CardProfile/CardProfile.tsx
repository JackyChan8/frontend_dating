import style from './CardProfile.module.scss';

import Image from 'next/image';

type Props = {
    avatar: string,
    name: string,
    age: number,
    amountLikes: number,
    amountViews: number,
    amountDates: number,
}

const CardProfile = ({ avatar, name, age, amountLikes, amountViews, amountDates }: Props) => {
    return (
        <div className={style.profile__card}>
            <div className={style.card__image}>
                <div className={style.card__image_circle}>
                    <Image src={avatar} alt={name}></Image>
                </div>
            </div>
            <div className={style.card__name}>
                <h2>{name}</h2>
            </div>
            <div className={style.card__year}>
                <h3>{age} года</h3>
            </div>
            <div className={style.card__progress}></div>
            <div className={style.card__statistics}>
                <div className={style.amount__likes}>
                    <h2>{amountLikes}</h2>
                    <p>Количество Лайков</p>
                </div>
                <div className={style.amount__views}>
                    <h2>{amountViews}</h2>
                    <p>Количество Просмотров</p>
                </div>
                <div className={style.amount__dates}>
                    <h2>{amountDates}</h2>
                    <p>Количество Свиданий</p>
                </div>
            </div>
        </div>
    )
}

export default CardProfile;