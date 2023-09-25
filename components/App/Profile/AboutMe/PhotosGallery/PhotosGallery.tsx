import style from './PhotosGallery.module.scss';

import Photos from './Photos/Photos';


const PhotosGallery = () => {
    return (
        <div className={style.photos_info}>
            <div className={style.photos}>
                <Photos />
            </div>
        </div>
    )
}

export default PhotosGallery;