import React, {FC} from 'react';
import img from "@/assets/product.jpeg";
import {ProductImageCard} from "@/components";

const ProductsList = [
    {
        name: 'Neki produkt',
        info: 'dimenzije 100x100',
        src: img,
        alt: 'alt',
    },
    {
        name: 'Neki produkt',
        info: 'dimenzije 100x100',
        src: img,
        alt: 'alt',
    },
];
const ProductsGallery:FC = () => {
    return (
        <div className={'w-full bg-accent-3 mt-8 py-20'}>
            <div className={'mx-16'}>
                <div
                    className={
                        'grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12'
                    }
                >
                    {[...ProductsList, ...ProductsList].map(
                        ({ name, info, src, alt }, index) => (
                            <ProductImageCard
                                key={index}
                                src={src}
                                alt={alt}
                                name={name}
                                info={info}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductsGallery;