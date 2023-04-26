import { FC } from 'react';

const StrengthsSection:FC= () => {
  return (
    <div
      className={'my-8 flex flex-col items-center gap-8 mx-4 sm:mx-20 mt-16'}
    >
      <h1 className={'text-center text-3xl font-bold'}>Naše prednosti</h1>
      <div
        className={
          'flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 bg-white border-[1px] w-fit border-accent-4 rounded-md shadow-md p-8'
        }
      >
        <div className={'flex flex-row gap-4 sm:w-1/3'}>
          <div>
            <div className={'w-8 h-8 rounded-md bg-accent-4'} />
          </div>
          <div className={'flex flex-col'}>
            <h4 className={'font-semibold text-lg'}>Fleksibilnost</h4>
            <p>Prilagajanje individualnim željam strank</p>
          </div>
        </div>

        <div className={'w-full h-[1px] sm:h-32 sm:w-[1px] bg-accent-4'} />

        <div className={'flex flex-row gap-4 sm:w-1/3'}>
          <div>
            <div className={'w-8 h-8 rounded-md bg-accent-4'} />
          </div>
          <div className={'flex flex-col'}>
            <h4 className={'font-semibold text-lg'}>Kvaliteta</h4>
            <p>Dosegamo vrhunsko kvaliteto</p>
          </div>
        </div>
        <div className={'w-full h-[1px] sm:h-32 sm:w-[1px] bg-accent-4'} />

        <div className={'flex flex-row gap-4 sm:w-1/3'}>
          <div>
            <div className={'w-8 h-8 rounded-md bg-accent-4'} />
          </div>
          <div className={'flex flex-col'}>
            <h4 className={'font-semibold text-lg'}>Preciznost</h4>
            <p>Precizna strojna izdelava in obdelava izdelkov</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrengthsSection;
