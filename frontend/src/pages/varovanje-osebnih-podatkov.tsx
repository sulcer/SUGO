import React from 'react';
import Head from 'next/head';
import Headline from '@/components/Headline/Headline';
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Locale} from "@/types/types";

const ConsentNotice = ({
  name,
  desc,
  children,
}: {
  name: string;
  desc?: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <div className={'mx-20 flex flex-col'}>
        <h1 className={'text-lg font-bold mb-3 text-tint-2'}>{name}</h1>
        {desc ? <p className={'text-md text-tint-2'}>{desc}</p> : children}
      </div>
    </>
  );
};

const Index = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('gdpr')}</title>
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

      <Headline
        title={t('gdpr-headline')}
        description={' '}
      />
      <div className={'bg-accent-3 py-10 mt-8 flex flex-col gap-10'}>
        <ConsentNotice
          name={t('general')}
          desc={t('general-text') as string}
        />
        <ConsentNotice name={t('data-collector')}>
          <p className={'text-tint-2'}>{t('data-collector-text')}</p>
          <ul className={'list-disc pl-10 pt-3'}>
            <li>
              <p className={'text-tint-2'}>{t('sugo')}</p>
            </li>
            <li>
              <p className={'text-tint-2'}>{t('address')}</p>
            </li>
            <li>
              <p className={'text-tint-2'}>{t('postal')}</p>
            </li>
            <li>
              <p className={'text-tint-2'}>{t('country')}</p>
            </li>
          </ul>
        </ConsentNotice>
        <ConsentNotice
          name={t('purpose')}
          desc={t('purpose-text') as string}
        />
        <ConsentNotice
          name={t('statistics')}
          desc={t('statistics-text') as string}
        />

        <ConsentNotice name={t('contact-form')}>
          <p className={'text-tint-2'}>{t('contact-form-text')}</p>
          <ul className={'list-disc pl-10 pt-3'}>
            <li className={'text-tint-2'}>{t('contact-form-item')}</li>
          </ul>
        </ConsentNotice>
        <ConsentNotice
          name={t('duration')}
          desc={t('duration-text') as string}
        />
        <ConsentNotice name={t('rights')}>
          <p className={'text-tint-2'}>{t('rights-text')}</p>
          <ul className={'list-disc pl-10 pt-3'}>
            <li className={'text-tint-2'}>{t('rights-item1')}</li>
            <li className={'text-tint-2'}>{t('rights-item2')}</li>
            <li className={'text-tint-2'}>{t('rights-item3')}</li>
            <li className={'text-tint-2'}>{t('rights-item4')}</li>
            <li className={'text-tint-2'}>{t('rights-item5')}</li>
           </ul>
        </ConsentNotice>
        <ConsentNotice name={t('cookies')}>
          <p className={'text-tint-2'}>{t('cookies-text')}</p>
          <table className={'table-auto my-8 w-full max-w-6xl'}>
            <thead className={'bg-gray-200'}>
              <tr
                className={
                  'border-b border-gray-300 text-gray-600 uppercase text-left p-4'
                }
              >
                <th className={'text-tint-2'}>{t('cookies-item1')}</th>
                <th className={'text-tint-2'}>{t('cookies-item2')}</th>
                <th className={'text-tint-2'}>{t('cookies-item3')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={'text-tint-2'}>{t('cookies-text1')}</td>
                <td className={'text-tint-2'}>{t('cookies-text2')}</td>
                <td className={'text-center text-tint-2'}>{t('cookies-text3')}</td>
              </tr>
            </tbody>
          </table>
        </ConsentNotice>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: Locale) {
    return {
        props: {
          ...await serverSideTranslations(locale, ['common']),
        }
    }
}
export default Index;
