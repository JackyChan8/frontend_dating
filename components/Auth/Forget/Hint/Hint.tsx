import style from './Hint.module.scss';

type Props = {
    title: string,
    desc: string,
}

const Hint = ({ title, desc }: Props) => {
    return (
        <div className={style.title}>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default Hint;