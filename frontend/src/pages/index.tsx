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
        <title>{t('sugo')}</title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content={t('description') as string}
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
