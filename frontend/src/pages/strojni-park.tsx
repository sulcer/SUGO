import React from 'react';
import Head from 'next/head';
import { MachineParkGallery } from '@/components';
import Headline from "@/components/Headline/Headline";
import {getMachinePark} from "@/lib/api";
import {motion} from "framer-motion";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Locale} from "@/types/types";

const MachineParkPage = (props: any) => {
    const { t } = useTranslation('common');

    return (
        <>
            <Head>
                <title>{t('machine-park')}</title>
                <meta content="text/html; charset=utf-8"/>
                <meta name="language" content="Slovenian"/>
                <meta
                    name="description"
                    content="Sugo d.o.o. Mehanska obdelava kovin in druge storitve. Družinsko podjetje, ki se ukvarja s struženjem, rezkanjem in tehnničnim svetovanjem. Specialisti na področju CNC izdelave izdelkov iz različnih materialov."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="robots" content="all"/>
                <meta name="author" content="sugo"/>
                <meta name="title" content="Sugo d.o.o"/>
                <meta name="keywords"
                      content="sugo, SUGO, sugo d.o.o, mehanska obdelava kovin, cnc, rezkanje, struženje, tehnično svetovanje, družinsko podjetje, strojna obdelava kovin, sodobni strojni park, Boštjan Golob s.p."/>
                <meta content="SUGO d.o.o" property="og:title"/>
                <meta content="Smo družinsko podjetje SUGO d.o.o. Stremimo k konstantnemu razvoju in potrebam naših strank, kar zagotavljamo s sodobnim strojnim parkom in dobrimi poslovnimi procesi. Z vsakoletnimi investicijami v strojni park sledimo trendu trga in izpolnjujemo želje naših naročnikov. Skrbimo za konkurenčnost na trgu, visoko kakovost, široko paleto izdelkov, inovacije in tehnično podporo. Naša osnova dejavnost je mehanska obdelava kovin. Specializiramo se predvsem v rezkanju in struženju izdelkov iz različnih materialov (železo, plastika, aluminij, legirano jeklo, medenina, …). V desetletju si je podjetje s kakovostjo in poštenostjo pridobilo zaupanje na zahtevnem trgu, domačih in tujih naročnikov. Prav tako bomo v prihodnje svoj trud vlagali v razvoj, inovacije in kakovost svojih izdelkov, z namenom zadovoljitve želja in potreb trga ter naših strank. Obdelavo vseh materialov odlikujeta vrhunska preciznost in kakovost, da so v skladu s strogimi tehničnimi standardi." property="og:description"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="next-head-count" content="15" />
            </Head>
            <motion.div animate={{ x: 0 }} initial={{ x: -100, speed: 5 }}>
                <Headline description={t('machine-park-text')} title={t('machine-park')}/>
            </motion.div>
            <MachineParkGallery machinePark={props.machinePark.data}/>
        </>
    );
};

export async function getStaticProps({ locale }: Locale) {
    const machinePark = await getMachinePark({locale});

    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
            machinePark,
        },
    };
}

export default MachineParkPage;