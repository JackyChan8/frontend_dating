import twitterImage from '@/public/main/social-network/twitter.svg';
import facebookImage from '@/public/main/social-network/facebook.svg';
import instagramImage from '@/public/main/social-network/instagram.svg';
import vkontakteImage from '@/public/main/social-network/vkontakte.svg';
import youtubeImage from '@/public/main/social-network/youtube.svg';

import Image from "next/image";
import Link from "next/link";

type Props = {
    name: string,
    classIcon: string,
};

const socialNetwork = [
    { name: 'twitter', src: twitterImage, alt: 'twitter-icon' },
    { name: 'facebook', src: facebookImage, alt: 'facebook-icon' },
    { name: 'instagram', src: instagramImage, alt: 'instagram-icon' },
    { name: 'vkontakte', src: vkontakteImage, alt: 'vkontakte-icon' },
    { name: 'youtube', src: youtubeImage, alt: 'youtube-icon' }
];

const IconSocialNetwork = ({ name, classIcon }: Props) => {
    return socialNetwork.map((el) => {
        const isIcon = name === el.name;
        return (
            isIcon && (
                <Link
                    href="#"
                    className={`${classIcon}`}
                >
                    <Image
                        key={el.name}
                        src={el.src}
                        alt={el.alt}
                    />
                </Link>
            )
        )
    })
}

export default IconSocialNetwork;