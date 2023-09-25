'use client';
import style from './SettingIcon.module.scss';

import { useRouter } from 'next/navigation'
import React, { useRef } from 'react';

import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';
import { SpeedDial } from 'primereact/speeddial';

const SettingIcon = () => {
    const toast = useRef<Toast>(null);
    const router = useRouter()

    const items: MenuItem[] = [
        {
            label: 'profile',
            icon: 'pi pi-question-circle',
            command: () => {
                router.push('/app/help');
            }
        },
        {
            label: 'settings',
            icon: 'pi pi-spin pi-cog',
            command: () => {
                router.push('/app/settings')
                // toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
    ];

    return (
        <>
            <Toast ref={toast} />
            <SpeedDial
                model={items}
                type="linear"
                direction="right"
                showIcon="pi pi-cog"
                className={style.maskClassName}
                buttonClassName={style.buttonHelp}
            />
        </>
    )
}

export default SettingIcon;


// import style from './SettingIcon.module.scss';

// const SettingIcon = () => {
//     return (
//         <button className={style.chat_icon_settings}>
//             <i className="pi pi-cog"></i>
//         </button>
//     )
// }

// export default SettingIcon;