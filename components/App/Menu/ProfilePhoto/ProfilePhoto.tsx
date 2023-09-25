import Image from 'next/image';
import Link from 'next/link';

import UserPhoto from '@/public/app/MainMenu/profile.jpg';


const ProfilePhoto = () => {
    return (
        <Link href="/app/profile">
            <Image src={UserPhoto} alt='profile-photo'></Image>
        </Link>
    )
}

export default ProfilePhoto;