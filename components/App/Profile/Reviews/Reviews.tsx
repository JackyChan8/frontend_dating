import style from './Reviews.module.scss';

import ReviewPhotoOne from '@/public/app/profile/men-1.jpg';
import ReviewPhotoTwo from '@/public/app/profile/men-2.jpg';
import ReviewPhotoThree from '@/public/app/profile/men-3.jpeg';

import Review from './Review/Review';

const Reviews = () => {
    const reviews = [
        {avatar: ReviewPhotoOne, name: 'Григорий', text: 'Очень общетельная 😘😘😘'},
        {avatar: ReviewPhotoTwo, name: 'Егор', text: 'Хорошо поболтали, спасибо))'},
        {avatar: ReviewPhotoThree, name: 'Дмитрий', text: '😍❤️😍'},
        {avatar: ReviewPhotoOne, name: 'Григорий', text: 'Очень общетельная 😘😘😘'},
        {avatar: ReviewPhotoTwo, name: 'Егор', text: 'Хорошо поболтали, спасибо))'},
        {avatar: ReviewPhotoThree, name: 'Дмитрий', text: '😍❤️😍'},
        {avatar: ReviewPhotoOne, name: 'Григорий', text: 'Очень общетельная 😘😘😘'},
        {avatar: ReviewPhotoTwo, name: 'Егор', text: 'Хорошо поболтали, спасибо))'},
        {avatar: ReviewPhotoThree, name: 'Дмитрий', text: '😍❤️😍'},
    ]

    return (
        <div className={style.profile__reviews}>
            <div className={style.reviews__title}>
                <h2>Отзывы</h2>
            </div>
            <div className={style.reviews__people}>
                {reviews.map((review) => (
                    <Review
                        key={review.name}
                        avatar={review.avatar}
                        urlAccount='#'
                        name={review.name}
                        text={review.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default Reviews;