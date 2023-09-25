import style from './App.module.scss';

import Image from 'next/image';

type Props = {
    src: string,
    title: string,
    text: string,
    classBlock: string,
}

const AppBlock = ({ src, title, text, classBlock }: Props) => {
    return (
        <div className={`${style.app__block} ${classBlock}`}>
                <div className={`${style.image_block} ${style.scale}`}>
                    <Image src={src} className={style.scale} alt='photo-app'></Image>
                </div>
                <div className={style.description_block}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className={style.button_block}>
                    <button type="button" className={style.btn_try}>Попробовать</button>
                </div>
        </div>
    )
}

export default AppBlock;