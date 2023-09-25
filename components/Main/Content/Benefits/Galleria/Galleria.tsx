'use client';
import style from './Galleria.module.scss';

import React, { useState, useEffect } from 'react';
import { PhotoService } from './service/PhotoService';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';

type Props = {
    classDiv: string
}

const Gallery = ({ classDiv }: Props) => {
    const [images, setImages] = useState<any>(null);
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item: any) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    const caption = (item: any) => {
        return (
            <React.Fragment>
                <div style={{ fontSize: '28px' }} className={`text-xl mb-2 font-bold ${style.title_text}`}>{item.title}</div>
                <p className={`text-white ${style.text_text}`}>{item.alt}</p>
            </React.Fragment>
        );
    }

    return (
        <div className={`${classDiv} ${style.card}`}>
            <Galleria
                value={images}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                caption={caption}
                autoPlay={true}
                transitionInterval={10000}
                className={style.galleria}
                style={{ maxWidth: '900px', color: '#fff', fontSize: '25px', borderRadius: '10px', backgroundColor: '#fff' }}
            />
        </div>
    )
}

export default Gallery;
