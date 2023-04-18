import Image from 'next/image';
import NotFound from '../../assets/404.svg';
import Link from 'next/link';

const Index = () => {
  return (
    <div
      className={
        'grid h-screen w-screen bg-gray-100 grid-cols-1 place-items-center lg:gap-40 px-10 sm:px-20 md:grid-cols-2 relative '
      }
    >
      <div
        className={'flex flex-col gap-5 items-center justify-start text-center'}
      >
        <h1 className={'text-4xl font-bold'}>Stran ne obstaja</h1>
        <p className={'text-xl'}>
          Stran, ki ste jo poizkusili obiskati ne obstaja.
        </p>
        <Link
          href={'/'}
          className={
            'inline-block px-4 py-2 text-xl text-white bg-red-400 hover:bg-red-500 rounded-lg'
          }
        >
          Nazaj na domačo stran
        </Link>
      </div>
      <Image
        src={NotFound}
        alt={'Page does not exists'}
        className={'opacity-50'}
      ></Image>
    </div>
  );
};

export default Index;
