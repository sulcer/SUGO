import React, {FC} from 'react';
import Image, {StaticImageData} from "next/image";
import styles from './ProductImageCard.module.scss';

interface ProductImageCardProps {
    src: StaticImageData;
    alt: string;
    name: string;
    info: string;
    width: number;
    height: number;
}
const ProductImageCard:FC<ProductImageCardProps> = ({ src, alt, name, info, width, height }) => {
    return (
        <div className={styles.imageWrapper}>
            <Image src={src} alt={alt} className={'rounded-md'} width={width} height={height}/>
            <div className={styles.content}>
                <h1
                    className={
                        'text-white font-bold text-center text-xl md:text-sm lg:text-xs xl:text-xl border-b-2 border-gray-300 mx-16 md:mx-12 lg:mx-24 my-2'
                    }
                >
                    {name}
                </h1>
                <p
                    className={
                        'text-white text-lg md:text-xs lg:text-sm lg:max-w-md mx-4'
                    }
                >
                    {info}
                </p>
            </div>
        </div>
    );
};

export default ProductImageCard;