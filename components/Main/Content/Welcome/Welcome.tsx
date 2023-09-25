import style from './Welcome.module.scss';
import Image from "next/image";

import imageOneCarousel from '@/public/main/carousel/1.png';
import imageTwoCarousel from '@/public/main/carousel/2.jpeg';
import imageThreeCarousel from '@/public/main/carousel/3.jpg';
import imageFourCarousel from '@/public/main/carousel/4.jpeg';

import ButtonComponent from '../../Utils/Buttons';
import IconSocialNetwork from '@/components/Main/Utils/SocialNetwork';

const Welcome: React.FC = () => {
    return (
        <section className={style.main_page}>
            <div className={style.welcome_page}>
                <div className={style.welcome}>
                    <h1 className={style.welcome__title}>Самое лучшее место знакомств</h1>
                    <p className={style.welcome__text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    <ButtonComponent name='join' text='Присоединиться' />
                </div>
                <div className={style.carousel}>
                    <Image src={imageOneCarousel} alt="carousel_image" />
                    <Image src={imageTwoCarousel} alt="carousel_image" />
                    <Image src={imageThreeCarousel} alt="carousel_image" />
                    <Image src={imageFourCarousel} alt="carousel_image" />
                </div>
                <div className={style.social_media}>
                    <div className={style.social_media__link}>
                        <div className={style.social_media__circle}>
                            <IconSocialNetwork name='twitter' classIcon={style.social_media__image} />
                        </div>
                    </div>
                    <div className={style.social_media__link}>
                        <div className={style.social_media__circle}>
                            <IconSocialNetwork name='facebook' classIcon={style.social_media__image} />
                        </div>
                    </div>
                    <div className={style.social_media__link}>
                        <div className={style.social_media__circle}>
                            <IconSocialNetwork name='instagram' classIcon={style.social_media__image} />
                        </div>
                    </div>
                    <div className={style.social_media__link}>
                        <div className={style.social_media__circle}>
                            <IconSocialNetwork name='vkontakte' classIcon={style.social_media__image} />
                        </div>
                    </div>
                    <div className={style.social_media__link}>
                        <div className={style.social_media__circle}>
                            <IconSocialNetwork name='youtube' classIcon={style.social_media__image} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.welcome_page_mobile}>
                <div className={style.welcome}>
                    <h1 className={style.welcome__title}>Самое лучшее место знакомств</h1>
                </div>
                <div className={style.carousel}>
                    <Image className={style.carousel__image} src={imageThreeCarousel} alt="image" />
                    <Image className={style.carousel__image} src={imageTwoCarousel} alt="image" />
                    <Image className={style.carousel__image} src={imageThreeCarousel} alt="image" />
                    <Image className={style.carousel__image} src={imageFourCarousel} alt="image" />
                </div>
                <div className={style.welcome_description}>
                    <p className={style.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    <ButtonComponent name='join' text='Присоединиться' />
                </div>
            </div>
        </section>
    )
}

export default Welcome;