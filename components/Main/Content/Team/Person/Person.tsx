import style from './Person.module.scss';

import Image from "next/image";
import personOne from '@/public/main/team/cristian.jpg';
import personTwo from '@/public/main/team/gabriel.jpg';

import IconSocialNetwork from "@/components/Main/Utils/SocialNetwork";


type Props = {
    fullName: string,
    job: string,
    description: string
}

const Person = ({ fullName, job, description }: Props) => {
    return (
        <div className={style.person}>
            <Image className={style.person__photo} src={fullName === 'Новиков Владислав' ? personOne : personTwo} alt='person-photo' />
            <div className={style.person__solial_networks}>
                <div className={style.person__solial_link}>
                    <IconSocialNetwork name='twitter' classIcon='' />
                </div>
                <div className={style.person__solial_link}>
                    <IconSocialNetwork name='instagram' classIcon='' />
                </div>
                <div className={style.person__solial_link}>
                    <IconSocialNetwork name='facebook' classIcon='' />
                </div>
                <div className={style.person__solial_link}>
                    <IconSocialNetwork name='vkontakte' classIcon='' />
                </div>
            </div>
            <h2 className={style.person__fullname}>{fullName}</h2>
            <h3 className={style.person__job}>{job}</h3>
            <div className={style.person__description}>{description}</div>
        </div>
    )
}

export default Person;