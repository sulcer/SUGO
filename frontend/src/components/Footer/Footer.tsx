import React, {FC} from 'react';
import {HiPhone, HiOutlineEnvelope, HiOutlineBuildingOffice2, HiOutlineMapPin, HiOutlineHome, HiOutlineGlobeEuropeAfrica} from 'react-icons/hi2';
import FooterSection from "@/components/FooterSection/FooterSection";
import {FooterItemType} from "@/types/types";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const Footer:FC = () => {
    const { t } = useTranslation('common');
    const router = useRouter();

    const firstMenuSection = {
        title: t('firm'),
        items: [
            {
                icon: <HiOutlineBuildingOffice2 className="text-white opacity-80"/>,
                text: t('sugo')
            },
            {
                icon: <HiOutlineMapPin className="text-white opacity-80"/>,
                text: t('address')
            },
            {
                icon: <HiOutlineHome className="text-white opacity-80"/>,
                text: t('postal')
            },
            {
                icon: <HiOutlineGlobeEuropeAfrica className="text-white opacity-80"/>,
                text: t('country')
            }]
    }

    const secondMenuSection = {
        title: t('contact'),
        items: [
            {
                icon: <HiPhone className="text-white opacity-80"/>,
                text: t('phone'),
                type: FooterItemType.PHONE
            },
            {
                icon: <HiPhone className="text-white opacity-80"/>,
                text: t('phone2'),
                type: FooterItemType.PHONE
            },
            {
                icon: <HiOutlineEnvelope className="text-white opacity-80"/>,
                text: t('mail'),
                type: FooterItemType.MAIL
            }]
    }

    return (
        <div className="bg-accent rounded-t-lg">
            <div className="flex flex-row justify-between px-20 pt-20 flex-wrap">
                <FooterSection title={firstMenuSection.title} items={firstMenuSection.items}/>
                <FooterSection title={secondMenuSection.title} items={secondMenuSection.items}/>
            </div>
            <div className="border-t border-white mt-20 opacity-50"/>
            <div className='flex justify-between mx-20 py-3'>
                <p className="text-white text-center text-xs opacity-80">{t('watermark')}</p>
                <div className="flex gap-1.5 text-white text-center text-xs">
                    <Link
                        className={'opacity-80 hover:opacity-100'}
                        href='/'
                        locale={router.locale = 'en'}>
                        <button>SLO</button>
                    </Link>
                    <Link
                        className={'opacity-80 hover:opacity-100'}
                        href='/'
                        locale={router.locale = 'de'}>
                        <button>DE</button>
                    </Link>
                    <Link
                        className={'opacity-80 hover:opacity-100'}
                        href='/'
                        locale={router.locale = 'en'}>
                        <button>EN</button>
                    </Link>
                </div>
                <Link
                    href="/varovanje-osebnih-podatkov"
                    className="text-white text-center text-xs opacity-80 hover:opacity-100"
                >
                    {t('GDPR')}
                </Link>
            </div>
        </div>
    );
};

export default Footer;