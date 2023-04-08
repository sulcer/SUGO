import React, {FC} from 'react';
import ImageCard from "@/components/ImageCard/ImageCard";
import {ServicesCounter} from "@/components";

interface GalleryProps {
    serviceCount: {name: string, count: number}[];
    gallery: any;
}
//TODO: flex gallery has to be grid gallery
const Gallery:FC<GalleryProps> = ({ serviceCount, gallery }) => {
    return (
        <div className="relative">
            <ServicesCounter  serviceCount={serviceCount}/>
            <div className="w-full bg-accent-3 flex flex-col gap-10 mt-12 sm:py-20 py-8">
                <div className="flex justify-around mx-5 flex-wrap gap-5 sm:gap-0 mt-5">
                    {gallery.map((image: any) => (
                        <ImageCard src={image.attributes.image.data.attributes.url} alt={image.attributes.image.data.attributes.name} key={image.id} width={image.attributes.image.data.attributes.width} height={image.attributes.image.data.attributes.height}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;