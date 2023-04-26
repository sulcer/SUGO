import React, {FC, useState} from 'react';
import Image, {StaticImageData} from "next/image";
import styles from './ImageCard.module.scss';
import disableScroll from 'disable-scroll';

interface ImageCardProps {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
}
const ImageCard:FC<ImageCardProps> = ({ src, alt, width, height }) => {
    const [isEnlarged, setIsEnlarged] = useState(false);
    const handleClick = () => {
        setIsEnlarged(true);
        disableScroll.on();
    };

    const handleClose = () => {
        setIsEnlarged(false);
        disableScroll.off();
    };

    return (
        <div className="sm:w-1/4">
            <div className={`${styles.imageWrapper} ${isEnlarged && styles.enlargedImageWrapper}`}>
                {isEnlarged && (<div className={`${styles.overlay} ${isEnlarged && styles.showOverlay}`} onClick={handleClose}></div>)}
                <Image src={src} alt={alt} width={width} height={height} className={`${styles.image} ${isEnlarged && styles.enlargedImage} rounded-md shadow-md`} onClick={handleClick} />
            </div>
        </div>
    );
};

export default ImageCard;