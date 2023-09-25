'use client';
import style from './ChatIcon.module.scss';
import { useState } from 'react';

import Chat from './Chat/Chat';


const ChatIcon = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            {show && (
                <div className={style.chat_block}>
                    <Chat show={show} setShow={setShow} />
                </div>
            )}
            <button className={style.chat_icon_chat} onClick={() => setShow(!show)}>
                <i className={show ? 'pi pi-times-circle' : 'pi pi-comment'}></i>
            </button>
        </>
    )
}

export default ChatIcon;