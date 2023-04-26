import React, {FC} from 'react';
import {HiOutlineCloud, HiOutlineCog8Tooth, HiOutlineHome, HiOutlineMapPin} from "react-icons/hi2";

const timeline = [
    {
        icon: <HiOutlineHome size={20}/>,
        text: "Ustanovitev podjetja",
        year: 2000
    },
    {
        icon: <HiOutlineMapPin size={20}/>,
        text: "Selitev podjetja",
        year: 2010
    },
    {
        icon: <HiOutlineCog8Tooth size={20}/>,
        text: "Posodobitev strojne opreme",
        year: 2017
    },
    {
        icon: <HiOutlineCloud size={20}/>,
        text: "Posodobitev strojne opreme",
        year: 2021,
        present: true
    }
]

const CompanyTimeline:FC = () => {
    return (
        <div className="mt-8 sm:mt-0">
            {timeline.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-row gap-3">
                        <div className="w-16 h-16 bg-accent-2 rounded-full flex justify-center items-center">
                            {item.icon}
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="font-bold text-xs">{item.year}</p>
                            <p className="text-sm">{item.text}</p>
                        </div>
                    </div>
                    {!item.present && <div className="h-14 w-0.5 bg-gray-500 ml-8 opacity-30 my-0.5"/>}
                </div>
            ))}
        </div>
    );
};

export default CompanyTimeline;