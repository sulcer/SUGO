import React, {FC} from 'react';
import {ProductImageCard} from "@/components";

interface ProductsGalleryProps {
    products: any;
}

const ProductsGallery:FC<ProductsGalleryProps> = ({ products }) => {

    console.log(products[0]);

    return (
        <div className={'w-full bg-accent-3 mt-8 py-20'}>
            <div className={'mx-16'}>
                <div
                    className={
                        'grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12'
                    }
                >
                    {products.map((product: any) => (
                        <ProductImageCard src={product.attributes.image.data.attributes.url} alt={product.attributes.image.data.attributes.name} name={product.attributes.name} info={product.attributes.description} width={300} height={300} key={product.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsGallery;