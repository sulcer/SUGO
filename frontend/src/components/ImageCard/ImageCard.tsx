import React, {FC} from 'react';
import Image, {StaticImageData} from "next/image";

interface ImageCardProps {
    src: StaticImageData;
    alt: string;
}
const ImageCard:FC<ImageCardProps> = ({ src, alt }) => {
    return (
        <div className="sm:w-1/4">
            <Image src={src} alt={alt} className={'rounded-md shadow-md'}/>
        </div>
    );
};

export default ImageCard;