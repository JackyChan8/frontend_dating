import IconComponent from '@/components/Main/Utils/Icons';
import style from './Header.module.scss';

type Props = {
    show: boolean,
    setShow: any,
}

const Header = ({ show, setShow }: Props) => {
    return (
        <div className={style.title}>
            <div className={style.title__block}>
                <IconComponent name='chats' isLink={false} />
                <h2>Чат</h2>
            </div>
            <button onClick={() => {setShow(!show)}} className={style.close_btn_mobile}>
                <i className='pi pi-times'></i>
            </button>
        </div>
    )
}

export default Header;