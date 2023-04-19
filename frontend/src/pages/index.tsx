import Head from 'next/head';
import { Services, Strengths, Thumbnail, About, Gallery } from '@/components';
import {
    getAbout,
    getCompanyTimeLine,
    getGallery,
    getServiceCount,
    getServices,
    getStrengths,
    getThumbnail
} from "@/lib/api";
import Script from "next/script";

export default function Home(props: any) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload" id="google-analytics">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
            `}
      </Script>
      <Head>
        <title>SUGO d.o.o</title>
        <meta name="robots" content="all" />
        <meta name="description" content="Kot družinsko podjetje se vedno prilagajamo potrebam naših strank, z neprestanim investiranjem v strojni park in proizvodne procese. Zagotavljamo konkurenčnost na trgu, visoko kakovost, inovacije ter tehnično podporo. Naša osnovna dejavnost je serijska proizvodnja in obdelava visoko preciznih struženih izdelkov iz različnih materialov za kupce iz različnih panog. Pridobili smo zaupanje tujih naročnikov na zahtevnem trgu, saj kar 90% naših izdelkov izvažamo na tuje trge. Naš strojni park je specializiran za s premerom 3-65mm in obdelavo vseh materialov z vrhunsko preciznostjo in kakovostjo v skladu s strogimi tehničnimi standardi. Naš cilj je zadovoljiti želje in potrebe naših kupcev, zato se bomo tudi v prihodnje osredotočili na razvoj in inovacije." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Thumbnail thumbnail={props.thumbnail.data.attributes.Landing}/>
      <Services services={props.service.data.attributes.OurService} />
      <Strengths strengths={props.strengths.data.attributes.Strengths}/>
      <About about={props.about.data.attributes.about} companyTimeline={props.companyTimeline.data.attributes.timeline}/>
      <Gallery serviceCount={props.serviceCount.data.attributes.services} gallery={props.gallery.data}/>
    </>
  );
}

export async function getStaticProps() {
    const thumbnail = await getThumbnail();
    const about = await getAbout();
    const companyTimeline = await getCompanyTimeLine();
    const serviceCount = await getServiceCount();
    const service = await getServices();
    const strengths = await getStrengths();
    const gallery = await getGallery();

    return {
        props: {
            thumbnail,
            about,
            companyTimeline,
            serviceCount,
            service,
            strengths,
            gallery,
        },
    };
}