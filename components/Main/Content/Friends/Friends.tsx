import style from './Friends.module.scss';

import Investor from './Investor/Investor';

const Friends = () => {
    return (
        <section className={style.friends}>
            <div className={style.investors}>
                <div className={style.friends__header}>
                    <div className={style.left_line}></div>
                    <div className={style.friends__title}>Инвесторы</div>
                    <div className={style.right_line}></div>
                </div>
                <div className={style.images_companies}>
                    <Investor />
                </div>
            </div>
        </section>
    )
}

export default Friends;