'use client';

import { Button } from 'primereact/button';

type Props = {
    classBtn: string,
}

const CrossBtn = ({ classBtn }: Props) => {
    const closeSidebar = () => {
        const sidebarMenu = document.getElementById('sidebar-menu');
        if (sidebarMenu) {
            sidebarMenu.style.display = 'none';
        }
    }

    return <Button onClick={() => closeSidebar()} icon="pi pi-times" className={classBtn} aria-label="Cancel" />
}

export default CrossBtn;