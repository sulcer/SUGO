import React, {FC} from 'react';
import ImageCard from "@/components/ImageCard/ImageCard";
import {ServicesCounter} from "@/components";

interface GalleryProps {
    gallery: any;
}
const Gallery:FC<GalleryProps> = ({ gallery }) => {
    return (
        <div className="relative">
            <ServicesCounter />
            <div className="w-full bg-accent-3 flex flex-col gap-10 mt-12 sm:py-20 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center mx-10 lg:mx-5 mt-5 2xl:mx-0 gap-y-12">
                    {gallery.map((image: any) => (
                        <ImageCard src={image.attributes.image.data.attributes.url} alt={image.attributes.image.data.attributes.name} key={image.id} width={image.attributes.image.data.attributes.width} height={image.attributes.image.data.attributes.height}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;