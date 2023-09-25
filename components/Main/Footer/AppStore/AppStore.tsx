import style from './AppStore.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import googlePlayLogo from '@/public/main/footer/google_play.png';
import appStoreLogo from '@/public/main/footer/app_store.svg';

const AppStore = () => {
    return (
        <>
            <Link href="#" className={style.app_store_logo}>
                <Image width={121} height={40} src={appStoreLogo} alt="app-store" />
            </Link>
            <Link href="#" className={style.google_play_logo}>
                <Image width={121} height={40} src={googlePlayLogo} alt="google-play" />
            </Link>
        </>
    )
}

export default AppStore;