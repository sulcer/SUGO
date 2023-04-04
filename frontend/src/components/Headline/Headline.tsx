import React, {FC} from "react";

interface HeadlineProps {
    title: string;
    description: string;
}
const Headline:FC<HeadlineProps> = ({ title, description }) => (
    <div className={'mx-20 mt-14'}>
        <h1 className={'text-2xl font-bold'}>{title}</h1>
        <p className={'text-lg'}>
            {description}
        </p>
    </div>
);

export default Headline;