import React, {FC} from 'react';
import {HiOutlineHome, HiOutlineMapPin, HiOutlineCog8Tooth, HiOutlineCloud} from 'react-icons/hi2';
import CompanyTimeline from "@/components/CompanyTimeline/CompanyTimeline";

const CompanyTimeLine = [
    {
        icon: <HiOutlineHome size={20}/>
    },
    {
        icon: <HiOutlineMapPin size={20}/>
    },
    {
        icon: <HiOutlineCog8Tooth size={20}/>
    },
    {
        icon: <HiOutlineCloud size={20}/>,
        present: true
    }]

interface AboutProps {
    about: string;
    companyTimeline: object;
}

const About:FC<AboutProps> = ({ about, companyTimeline }) => {

    return (
        <div className="px-5 sm:px-20 sm:my-16">
            <h1 className="text-3xl font-bold mb-5">O nas</h1>
            <div className="flex flex-row flex-wrap justify-between">
                <div className="w-full sm:w-4/6 flex flex-col gap-5">
                    {about}
                </div>
                <CompanyTimeline items={CompanyTimeLine}  text={companyTimeline}/>
            </div>
        </div>
    );
};
export default About;