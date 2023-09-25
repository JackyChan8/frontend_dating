'use client';

import IconComponent from "@/components/Main/Utils/Icons"

type Props = {
    classBtn: string,
}

const SidebarIcon = ({ classBtn }: Props) => {
    const openSidebar = () => {
        const sidebarMenu = document.getElementById('sidebar-menu');
        if (sidebarMenu) {
            sidebarMenu.style.display = 'flex';
        }
    }

    return (
        <button className={classBtn} onClick={() => openSidebar()}>
            <IconComponent name='burger' href="#" text='' class_name='' />
        </button>
    )
}

export default SidebarIcon;