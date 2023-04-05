import React, {FC, useState} from 'react';
import Image, {StaticImageData} from "next/image";
import styles from './ImageCard.module.scss';

interface ImageCardProps {
    src: StaticImageData;
    alt: string;
}
const ImageCard:FC<ImageCardProps> = ({ src, alt }) => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const handleClick = () => {
        setIsEnlarged(true);
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        setIsEnlarged(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="sm:w-1/4">
            <div className={`${styles.imageWrapper} ${isEnlarged ? styles.enlargedImageWrapper : ''}`}>
                {isEnlarged && (<div className={`${styles.overlay} ${isEnlarged ? styles.showOverlay : ''}`} onClick={handleClose}></div>)}
                <Image src={src} alt={alt} className={`${styles.image} ${isEnlarged ? styles.enlargedImage : ''}`} onClick={handleClick} />
            </div>
        </div>
    );
};

export default ImageCard;