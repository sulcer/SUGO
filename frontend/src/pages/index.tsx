import Head from 'next/head';
import { About, Gallery, Services, Strengths, Thumbnail } from '@/components';
import { getAbout, getGallery } from '@/lib/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next";
import {Locale} from "@/types/types";

export default function Home(props: any) {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>SUGO d.o.o</title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Kot družinsko podjetje se vedno prilagajamo potrebam naših strank, z neprestanim investiranjem v strojni park in proizvodne procese. Zagotavljamo konkurenčnost na trgu, visoko kakovost, inovacije ter tehnično podporo. Naša osnovna dejavnost je serijska proizvodnja in obdelava visoko preciznih struženih izdelkov iz različnih materialov za kupce iz različnih panog. Pridobili smo zaupanje tujih naročnikov na zahtevnem trgu, saj kar 90% naših izdelkov izvažamo na tuje trge. Naš strojni park je specializiran za s premerom 3-65mm in obdelavo vseh materialov z vrhunsko preciznostjo in kakovostjo v skladu s strogimi tehničnimi standardi. Naš cilj je zadovoljiti želje in potrebe naših kupcev, zato se bomo tudi v prihodnje osredotočili na razvoj in inovacije."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Thumbnail />
      <Services />
      <Strengths />
      <About about={props.about.data.attributes.about} />
      <Gallery gallery={props.gallery.data} />
    </>
  );
}

export async function getStaticProps({ locale }: Locale) {
  const about = await getAbout({locale});
  const gallery = await getGallery();

  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
      about,
      gallery,
    },
  };
}
