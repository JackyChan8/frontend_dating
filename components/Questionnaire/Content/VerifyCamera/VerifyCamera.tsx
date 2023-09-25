'use client';
import style from './VerifyCamera.module.scss';

import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const VerifyCamera = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState("");

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        console.log('image (base64): ', imageSrc);
      }, [webcamRef]);
      
    return (
        <div className={style.cameraBlock}>
        {imgSrc ? (
            <img src={imgSrc} alt="webcam" />
        ) : (
            <Webcam ref={webcamRef} />
        )}
        <div className={style.form_button}>
            {imgSrc ? (
            <>
                <button>Подтвердить</button>
                <button className={style.repeat} onClick={() => setImgSrc("")}>Повторить</button>
            </>
            ) : (
            <button onClick={capture}>Сделать фото</button>
            )}
        </div>
        </div>
    )
}

export default VerifyCamera;