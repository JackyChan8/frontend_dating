import ChatIcon from '../Chat/ChatIcon';
import SettingIcon from '../Setting/SettingIcon';
import style from './IconsMenu.module.scss';

const IconsMenu = () => {
    return (
        <div className={style.icons_utils}>
            <SettingIcon />
            <ChatIcon />
        </div>
    )
}

export default IconsMenu;