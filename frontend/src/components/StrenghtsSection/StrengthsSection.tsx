import { FC } from 'react';

const StrengthsSection: FC = () => {
  return (
    <div className={'my-8 flex flex-col items-center gap-8 mx-4 sm:mx-20'}>
      <h1 className={'text-center text-3xl font-bold'}>Naše prednosti</h1>
      <div
        className={
          'flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 bg-white border-[1px] w-fit border-accent-4 rounded-md shadow-md p-8'
        }
      >
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-row gap-4'}>
            <div className={'w-16 h-16 rounded-md bg-accent-4'} />
            <h4 className={'font-semibold text-lg'}>Kvaliteta</h4>
          </div>
          <p>Dosegamo vrhunsko kvaliteto</p>
        </div>

        <div className={'w-full h-[1px] sm:h-32 sm:w-[1px] bg-primary'} />

        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-row gap-4'}>
            <div className={'w-16 h-16 rounded-md bg-accent-4'} />
            <h4 className={'font-semibold text-lg'}>Preciznost</h4>
          </div>
          <p>Precizna strojna izdelava in obdelava izdelkov...</p>
        </div>

        <div className={'w-full h-[1px] sm:h-32 sm:w-[1px] bg-primary'} />

        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-row gap-4'}>
            <div className={'w-16 h-16 rounded-md bg-accent-4'} />
            <h4 className={'font-semibold text-lg'}>Fleksibilnost</h4>
          </div>
          <p>Prilagajanje individualnim željam strank</p>
        </div>
      </div>
    </div>
  );
};

export default StrengthsSection;
