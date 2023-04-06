import React, {FC} from 'react';
import ImageCard from "@/components/ImageCard/ImageCard";
import {ServicesCounter} from "@/components";

interface GalleryProps {
    serviceCount: {name: string, count: number}[];
    gallery: any;
}

const Gallery:FC<GalleryProps> = ({ serviceCount, gallery }) => {
    return (
        <div className="relative">
            <ServicesCounter  serviceCount={serviceCount}/>
            <div className="w-full bg-accent-3 flex flex-col gap-10 mt-12 sm:py-20 py-8">
                <div className="flex justify-around mx-5 flex-wrap gap-5 sm:gap-0 mt-5">
                    {Array(3).fill(0).map((_, index) => (
                        <ImageCard src={gallery.data.attributes.url} alt={gallery.data.attributes.name} width={gallery.data.attributes.width} height={gallery.data.attributes.height} key={index}/>
                    ))}
                </div>
                <div className="flex justify-around mx-5 flex-wrap gap-5 sm:gap-0">
                    {Array(3).fill(0).map((_, index) => (
                        <ImageCard src={gallery.data.attributes.url} alt={gallery.data.attributes.name} width={gallery.data.attributes.width} height={gallery.data.attributes.height} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;