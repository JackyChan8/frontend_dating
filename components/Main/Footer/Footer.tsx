import style from './Footer.module.scss';

import LogoCompany from '../Header/Logo/Logo';
import AppStore from './AppStore/AppStore';

const Footer = () => {
    return (
        <section className={style.footer}>
            <footer>
                <div className={style.logo_company}>
                    <LogoCompany />
                </div>
                <div className={style.app_stores}>
                    <h2>Скачайте приложение</h2>
                    <div className={style.apps}>
                        <AppStore />
                    </div>
                </div>
                <div className={style.copyright}>
                    <p>© 2023 Company. Все права защищены</p>
                </div>
            </footer>
        </section>
    )
}

export default Footer;