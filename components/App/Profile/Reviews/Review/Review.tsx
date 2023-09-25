import style from './Review.module.scss';

import Link from 'next/link';
import Image from 'next/image';

type Props = {
    avatar: string,
    urlAccount: string,
    name: string,
    text: string,
}

const Review = ({ avatar, urlAccount, name, text }: Props) => {
    return (
        <div className={style.review_person}>
            <Link href={urlAccount}>
                <Image src={avatar} alt='men-3'></Image>
            </Link>
            <div className={style.person_info}>
                <h2>{name}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Review;