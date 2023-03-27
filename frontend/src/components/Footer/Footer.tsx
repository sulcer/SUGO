import React, {FC} from 'react';
import {FaFacebook} from 'react-icons/fa';
import {HiPhone, HiPrinter, HiOutlineEnvelope, HiOutlineBuildingOffice2, HiOutlineMapPin, HiOutlineHome, HiOutlineGlobeEuropeAfrica} from 'react-icons/hi2';
import FooterSection from "@/components/FooterSection/FooterSection";

const firstMenuSection = {
    title: "PODJETJE",
    items: [
        {
            icon: <HiOutlineBuildingOffice2 className="text-white opacity-80"/>,
            text: "SUGO d.o.o"
        },
        {
            icon: <HiOutlineMapPin className="text-white opacity-80"/>,
            text: "Spodnji Jakobski Dol 45"
        },
        {
            icon: <HiOutlineHome className="text-white opacity-80"/>,
            text: "2222 Jakobski dol"
        },
        {
            icon: <HiOutlineGlobeEuropeAfrica className="text-white opacity-80"/>,
            text: "Slovenija"
        }]
}

const secondMenuSection = {
    title: "KONTAKT",
    items: [
        {
            icon: <HiPhone className="text-white opacity-80"/>,
            text: "+386 40 123 456"
        },
        {
            icon: <HiPrinter className="text-white opacity-80"/>,
            text: "+386 40 123 456"
        },
        {
            icon: <HiOutlineEnvelope className="text-white opacity-80"/>,
            text: "cncgolob@gmail.com",
        }]
}

const thirdMenuSection = {
    items: [
        {
            icon: <FaFacebook className="text-white opacity-80"/>,
            text: "SUGO d.o.o"
        }
    ]
}

const Footer:FC = () => {
    return (
        <div className="bg-accent rounded-t-lg">
            <div className="flex flex-row justify-between px-20 pt-20 flex-wrap">
                <FooterSection title={firstMenuSection.title} items={firstMenuSection.items}/>
                <FooterSection title={secondMenuSection.title} items={secondMenuSection.items}/>
                <FooterSection items={thirdMenuSection.items}/>
            </div>
            <div className="border-t border-white pb-10 mt-20 opacity-50"/>
        </div>
    );
};

export default Footer;