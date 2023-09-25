'use client';
import style from './Photos.module.scss';

import { Image } from 'primereact/image';
import { Carousel } from 'primereact/carousel';

import avatarImage from '@/public/app/MainMenu/profile.jpg';
import avatarImageTwo from '@/public/app/profile/profile-2.jpg';
import avatarImageThree from '@/public/app/profile/girl-1.jpg';
import avatarImageFour from '@/public/app/profile/girl-2.jpg';
import avatarImageFive from '@/public/app/profile/jacky.png';

const Photos = () => {
    const images = [
        {id: 1, src: avatarImage, alt: 'image-1'},
        {id: 2, src: avatarImageTwo, alt: 'image-2'},
        {id: 3, src: avatarImageThree, alt: 'image-3'},
        {id: 4, src: avatarImageFour, alt: 'image-4'},
        {id: 5, src: avatarImageFive, alt: 'image-5'},
        {id: 6, src: avatarImageFive, alt: 'image-5'},
    ];

    const responsiveOptions = [
        {
            breakpoint: '1300px',
            numVisible: 2,
            numScroll: 2
        },
        // {
        //     breakpoint: '991px',
        //     numVisible: 2,
        //     numScroll: 1
        // },
        // {
        //     breakpoint: '767px',
        //     numVisible: 1,
        //     numScroll: 1
        // }
    ];

    const productTemplate = (image: any) => {
        return (
            <div className={style.carousel__image}>
                <Image key={image.id} src={image.src.src} alt={image.alt} width="250px" preview />
            </div>
        );
    };

    return (
        <div className={style.card}>
            <Carousel contentClassName={style.contentClass} value={images} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} showIndicators={false} />
        </div>
    )
}

export default Photos;
