import React, {FC, useState} from 'react';
import Image, {StaticImageData} from "next/image";
import styles from './ImageCard.module.scss';

interface ImageCardProps {
    src: StaticImageData;
    alt: string;
}
const ImageCard:FC<ImageCardProps> = ({ src, alt }) => {
    const [isEnlarged, setIsEnlarged] = useState<boolean>(false);

    const handleClick = () => {
        setIsEnlarged(!isEnlarged);
    };

    return (
        <div className="sm:w-1/4">
            <div className={`${styles.imageWrapper} ${isEnlarged && styles.enlargedImageWrapper}`}>
                <div className={`${styles.overlay} ${isEnlarged && styles.showOverlay}`} onClick={handleClick}></div>
                <Image src={src} alt={alt} className={`${styles.image} ${isEnlarged && styles.enlargedImage} ${isEnlarged && styles.enlarged} rounded-md shadow-md`} onClick={handleClick}/>
            </div>
        </div>
    );
};

export default ImageCard;