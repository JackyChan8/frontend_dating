import style from './Reputation.module.scss';
import Statistic from './Statistic/Statistic';

const Reputation = () => {
    return (
        <div className={style.profile__reputation}>
            <div className={style.reputation__title}>
                <h2>Ваша Репутация</h2>
            </div>
            <Statistic title='За Все время:' percent={75} />
            <Statistic title='За Неделю:' percent={100} />
            <Statistic title='За День:' percent={40} />
        </div>
    )
}

export default Reputation;