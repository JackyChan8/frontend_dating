import Image from 'next/image';

type Props = {
    avatar: string,
    alt: string,
    activeClass?: string,
}

const Dialog = ({ avatar, alt, activeClass }: Props) => {
    return (
        <button>
            <Image className={activeClass} src={avatar} alt={alt}></Image>
        </button>
    )
}

export default Dialog;