import style from './Logo.module.scss';

import Image from "next/image";
import logo from '@/public/main/header/logo.jpg';

const LogoCompany = () => {
    return <Image width={150} height={147} className={style.company__logo} src={logo} alt='logo-company' />
}

export default LogoCompany;