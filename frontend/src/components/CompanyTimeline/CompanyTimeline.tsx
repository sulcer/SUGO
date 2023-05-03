import React, {FC} from 'react';
import {HiOutlineBuildingOffice2, HiOutlineCog8Tooth, HiOutlineHome, HiOutlineMapPin} from "react-icons/hi2";
import {useTranslation} from "next-i18next";

const CompanyTimeline:FC = () => {
    const { t } = useTranslation('common');

    const timeline = [
        {
            icon: <HiOutlineHome size={20}/>,
            text: t('founder'),
            year: 2010
        },
        {
            icon: <HiOutlineBuildingOffice2 size={20}/>,
            text: t('firm_start'),
            year: 2019
        },
        {
            icon: <HiOutlineMapPin size={20}/>,
            text: t('firm_relocation'),
            year: 2020
        },
        {
            icon: <HiOutlineCog8Tooth size={20}/>,
            text: t('machine_purchase'),
            year: 2022,
            present: true
        }
    ]

    return (
        <div className="mt-8 sm:mt-0">
            {timeline.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-row gap-3">
                        <div className="w-16 h-16 bg-accent-4 rounded-full flex justify-center items-center">
                            {item.icon}
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="font-bold text-xs">{item.year}</p>
                            <p className="text-sm text-tint-2">{item.text}</p>
                        </div>
                    </div>
                    {!item.present && <div className="h-14 w-0.5 bg-gray-500 ml-8 opacity-30 my-0.5"/>}
                </div>
            ))}
        </div>
    );
};

export default CompanyTimeline;