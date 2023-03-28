import React, {FC} from 'react';
import img from '../../assets/gallery/test.jpeg';
import ImageCard from "@/components/ImageCard/ImageCard";
import {ServicesCounter} from "@/components";

const Gallery:FC = () => {
    return (
        <div className="relative">
            <ServicesCounter />
            <div className="w-full bg-accent-3 flex flex-col gap-10 mt-12 py-20">
                <div className="flex justify-around mx-5 flex-wrap gap-5 sm:gap-0">
                    {Array(3).fill(0).map((_, index) => (
                        <ImageCard key={index} src={img} alt={'test'}/>
                    ))}
                </div>
                <div className="flex justify-around mx-5 flex-wrap gap-5 sm:gap-0">
                    {Array(3).fill(0).map((_, index) => (
                        <ImageCard key={index} src={img} alt={'test'}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;