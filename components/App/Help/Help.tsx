import style from './Help.module.scss';

import Image from 'next/image';

import HelpForm from './HelpForm/HelpForm';

import FormImage from '@/public/app/Help/form.svg';
import NavbarApp from '../Menu/NavbarMenu/NavbarApp';
import IconsMenu from '../Menu/IconsMenu/IconsMenu';

const Help = () => {
    return (
        <div className={style.help_container}>
            <NavbarApp />
            <div className={style.help_block}>
                <div className={style.help__description}>
                    <div className={style.title}>
                        <h1>Давайте поможем вам</h1>
                    </div>
                    <div className={style.description}>
                        <h2>Заполните форму, и мы ответим вам.</h2>
                    </div>
                    <div className={style.image}>
                        <Image src={FormImage} alt='form-icon'></Image>
                    </div>
                </div>
                <div className={style.help__form}>
                    <HelpForm />
                </div>
            </div>
            <IconsMenu />
        </div>
    )
}

export default Help;