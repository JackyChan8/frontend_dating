import style from './AboutMe.module.scss';

import PhotosGallery from './PhotosGallery/PhotosGallery';

type Props = {
    aboutMe: string,
}

const AboutMe = ({ aboutMe }: Props) => {
    return (
        <div className={style.profile__about_me}>
            <div className={style.about__title}>
                <h1>Обо мне</h1>
            </div>
            <div className={style.about__description}>
                <p>{aboutMe}</p>
            </div>
            <div className={style.about__information}>
                <button className={`${style.btn_active} ${style.btn_photos}`}>Ваши фотографии</button>
                <button>Ваши Параметры</button>
                <PhotosGallery />
            </div>
        </div>
    )
}

export default AboutMe;