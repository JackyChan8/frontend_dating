import style from './Profile.module.scss';

import AboutMe from "./AboutMe/AboutMe";
import CardProfile from "./CardProfile/CardProfile";

import avatarImage from '@/public/app/MainMenu/profile.jpg';
import Reputation from "./Reputation/Reputation";
import Reviews from "./Reviews/Reviews";
import CalendarMeets from "./CalendarMeets/CalendarMeets";
import NavbarApp from '../Menu/NavbarMenu/NavbarApp';
import ChatIcon from '../Menu/Chat/ChatIcon';
import SettingIcon from '../Menu/Setting/SettingIcon';
import IconsMenu from '../Menu/IconsMenu/IconsMenu';


const Profile = () => {
    return (
        <div className={style.profile_container}>
            <NavbarApp />
            <div className={style.block_profile}>
                <div className={style.profile}>
                    <CardProfile
                        avatar={avatarImage}
                        name="Анастасия"
                        age={23}
                        amountLikes={59}
                        amountViews={85}
                        amountDates={18}
                    />
                    <AboutMe
                        aboutMe='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, incidunt perspiciatis aperiam rem maxime explicabo numquam enim fugiat ducimus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, incidunt perspiciatis aperiam rem maxime explicabo numquam enim fugiat ducimus. rem maxime explicabo numquam enim fugiat ducimus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. rem maxime explicabo numquam enim fugiat ducimus.Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
                    />
                    <Reputation />
                    <CalendarMeets />
                    <Reviews />
                </div>
            </div>
            <IconsMenu />
        </div>
    )
}

export default Profile;