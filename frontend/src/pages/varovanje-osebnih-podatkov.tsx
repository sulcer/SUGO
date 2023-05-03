import React from 'react';
import Head from 'next/head';
import Headline from '@/components/Headline/Headline';

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
  return (
    <>
      <Head>
        <title>Varovanje osebnih podatkov</title>
        <meta name="description" content="Varovanje osebnih podatkov" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headline
        title={'Izjava o varovanju osebnih podatkov'}
        description={' '}
      />
      <div className={'bg-accent-3 py-10 mt-8 flex flex-col gap-10'}>
        <ConsentNotice
          name={'SPLOŠNO'}
          desc={
            'V podjetju SUGO d.o.o. spoštujemo vašo pravico do\n' +
            '            zasebnosti in se zavezujemo, da bomo varovali zaupnost osebnih\n' +
            '            podatkov in zasebnost obiskovalcev naše spletne strani. Zbrane\n' +
            '            osebne podatke bomo uporabili izključno za opravljanje storitev, ki\n' +
            '            jih spletno mesto ponuja. Z izjavo o varovanju osebnih podatkov vas\n' +
            '            želimo obvestiti o obdelavi vaših podatkov v našem podjetju ter o\n' +
            '            vaših pravicah v zvezi z varstvom podatkov.'
          }
        />
        <ConsentNotice name={'UPRAVLJALEC PODATKOV'}>
          <p className={'text-tint-2'}>
            Upravljavec osebnih podatkov v okviru te spletne strani po predpisih
            Splošne uredbe o varstvu podatkov:
          </p>
          <ul className={'list-disc pl-10 pt-3'}>
            <li>
              <p className={'text-tint-2'}>Podjetje SUGO d.o.o.</p>
            </li>
            <li>
              <p className={'text-tint-2'}>Spodnji Jakobski Dol 45</p>
            </li>
            <li>
              <p className={'text-tint-2'}>2222 Jakobski dol</p>
            </li>
            <li>
              <p className={'text-tint-2'}>Slovenija</p>
            </li>
          </ul>
        </ConsentNotice>
        <ConsentNotice
          name={'NAMEN OBDELAVE OSEBNIH PODATKOV'}
          desc={
            'Podjetje na spletnem mestu zbira osebne podatke posredovane preko obrazcev. Osebni podatki, ki nam jih posredujete bodo obravnavani zaupno in bodo uporabljeni zgolj za namene, za katere so bili posredovani. Vaši osebni podatki se bodo uporabljali v skladu z zakoni in predpisi, ki opredeljujejo varovanje osebnih podatkov (Splošna uredba EU o varstvu podatkov).'
          }
        />
        <ConsentNotice
          name={
            'ZBIRANJE PODATKOV ZA PREGLED STATISTIKE UPORABE SPLETNEGA MESTA'
          }
          desc={
            'Spletno mesto lahko samodejno zbira tudi nekatere podatke o strojni in programski opremi uporabnikovega računalnika ter IP naslov naprave, s katero dostopate do spletnega mesta. Ti podatki bodo uporabljeni izključno za izdelavo splošne statistike o uporabi spletnega mesta.'
          }
        />

        <ConsentNotice name={'KONTAKTNI OBRAZEC'}>
          <p className={'text-tint-2'}>
            Na naši spletni strani lahko izpolnite spletni kontaktni obrazec za
            izvedbo povpraševanj. V ta namen SUGO d.o.o., od vas zbira naslednje
            podatke, ki jih posredujete na prostovoljen način:
          </p>
          <ul className={'list-disc pl-10 pt-3'}>
            <li className={'text-tint-2'}>Elektronski naslov</li>
          </ul>
        </ConsentNotice>
        <ConsentNotice
          name={'OBDOBJE HRAMBE OSEBNIH PODATKOV'}
          desc={
            'Podatki se hranijo največ toliko časa, kolikor je potrebno za dosego namena, zaradi katerega so bili zbrani ali nadalje obdelani oziroma do poteka zastaralnih rokov za izpolnitev obveznosti ali zakonsko predpisanega roka hrambe.'
          }
        />
        <ConsentNotice name={'PRAVICE POSAMEZNIKA'}>
          <p className={'text-tint-2'}>
            V skladu z določili Splošne uredbe EU o varstvu osebnih podatkov
            (GDPR) imate do svojih podatkov pravico dostopati kadarkoli. Poleg
            tega lahko, če so izpolnjene določene zahteve, uveljavljate spodaj
            navedene pravice:
          </p>
          <ul className={'list-disc pl-10 pt-3'}>
            <li className={'text-tint-2'}>Pravico do popravka</li>
            <li className={'text-tint-2'}>Pravico do izbrisa</li>
            <li className={'text-tint-2'}>Pravico do omejitve obdelave</li>
            <li className={'text-tint-2'}>Pravico do pritožbe</li>
            <li className={'text-tint-2'}>Pravico do prenosljivosti podatkov</li>
          </ul>
        </ConsentNotice>
        <ConsentNotice name={'PIŠKOTKI'}>
          <p className={'text-tint-2'}>
            Piškotki so majhne tekstovne datoteke, ki se ob obisku spletne
            strani prenesejo na vaš računalnik ali mobilno napravo. Spletna
            stran uporablja piškotke storitve Google Analytics za analizo obiska
            naše spletne strani. S pomočjo teh piškotkov se zbirajo statistični
            podatki o uporabi spletnega mesta brez osebne prepoznave
            obiskovalcev.{' '}
          </p>
          <table className={'table-auto my-8 w-full max-w-6xl'}>
            <thead className={'bg-gray-200'}>
              <tr
                className={
                  'border-b border-gray-300 text-gray-600 uppercase text-left p-4'
                }
              >
                <th className={'text-tint-2'}>Ime piškotka</th>
                <th className={'text-tint-2'}>Namen</th>
                <th className={'text-tint-2'}>Čas trajanja</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={'text-tint-2'}>_ga</td>
                <td className={'text-tint-2'}>
                  Analitični piškotek, ki se uporablja za izračun podatkov o
                  obisku spletnega mesta
                </td>
                <td className={'text-center text-tint-2'}>2 leti</td>
              </tr>
            </tbody>
          </table>
        </ConsentNotice>
      </div>
    </>
  );
};

export default Index;
