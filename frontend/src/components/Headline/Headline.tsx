import React, {FC} from "react";

interface HeadlineProps {
    title: string;
    description: string;
}
const Headline:FC<HeadlineProps> = ({ title, description }) => (
    <div className={'mx-5 sm:mx-20 mt-10'}>
        <h1 className={'text-2xl font-bold'}>{title}</h1>
        <p className={'text-base text-tint-2'}>
            {description}
        </p>
    </div>
);

export default Headline;