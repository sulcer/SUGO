import { FC } from 'react';
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineCog6Tooth,
  HiOutlineAdjustmentsHorizontal
} from "react-icons/hi2";

const StrengthsSection:FC= () => {
  return (
    <div className={'my-8 flex flex-col items-center gap-8 mx-4 sm:mx-20 mt-16'}>
      <h1 className={'text-center text-4xl font-bold mb-5'}>
        Zakaj <span className='text-tint'>Sugo?</span>
      </h1>
      <div
        className={
          'flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 bg-white border-[1px] w-fit border-accent-4 rounded-md shadow-md p-8'
        }
      >
        <div className={'flex flex-row gap-3 sm:w-1/3 group'}>
          <div>
            <div className={'w-8 h-8 rounded-md flex justify-center items-center transition ease-in-out delay-150 duration-300'}>
              <HiOutlineCog6Tooth size={25}/>
            </div>
          </div>
          <div className={'flex flex-col mt-0.5'}>
            <h4 className={'font-semibold text-lg mb-3 group-hover:text-tint transition ease-in-out delay-100 duration-300'}>Fleksibilnost</h4>
            <p className='text-sm text-gray-500 group-hover:text-black transition ease-in-out delay-150 duration-300'>Prilagajanje individualnim željam in potrebam naših strank. Odlikujeta nas odzivnost in hitra izvedba naročil.</p>
          </div>
        </div>

        <div className={'w-full h-[1px] sm:h-32 sm:w-[1px] bg-accent-4'} />

        <div className={'flex flex-row gap-3 sm:w-1/3 group'}>
          <div>
            <div className={'w-8 h-8 rounded-md flex justify-center items-center transition ease-in-out delay-150 duration-300'}>
              <HiOutlineClipboardDocumentCheck size={25}/>
            </div>
          </div>
          <div className={'flex flex-col mt-0.5'}>
            <h4 className={'font-semibold text-lg mb-3 group-hover:text-tint transition ease-in-out delay-100 duration-300'}>Kvaliteta</h4>
            <p className='text-sm text-gray-500 group-hover:text-black transition ease-in-out delay-150 duration-300'>Dosegamo vrhunsko kvaliteto storitev in izdelkov, ki so obdelani pri nas na tehnološko dovršenih strojih v lastni proizvodnji.</p>
          </div>
        </div>
        <div className={'w-full h-[1px] sm:h-32 sm:w-[1px] bg-accent-4'} />

        <div className={'flex flex-row gap-3 sm:w-1/3 group'}>
          <div>
            <div className={'w-8 h-8 rounded-md flex justify-center items-center transition ease-in-out delay-150 duration-300'}>
              <HiOutlineAdjustmentsHorizontal size={25}/>
            </div>
          </div>
          <div className={'flex flex-col mt-0.5'}>
            <h4 className={'font-semibold text-lg mb-3 group-hover:text-tint transition ease-in-out delay-100 duration-300'}>Preciznost</h4>
            <p className='text-sm text-gray-500 group-hover:text-black transition ease-in-out delay-150 duration-300'>Precizna strojna izdelava in obdelava izdelkov, ki jih odlikujejo bogate dolgoletne izkušnje ter strokovnost našega kadra.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrengthsSection;
