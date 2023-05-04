import {FC, useRef} from 'react';
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineCog6Tooth,
  HiOutlineAdjustmentsHorizontal
} from "react-icons/hi2";
import {useInView} from "framer-motion"
import {useTranslation} from "next-i18next";

const StrengthsSection:FC= () => {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={'my-8 flex flex-col items-center gap-8 mx-4 sm:mx-20 mt-16'}>
      <h1 className={'text-center text-4xl font-bold mb-5'}>
        {t('why_us')} <span className='text-tint'>{t('why_us2')}</span>
      </h1>
      <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        className={
          'flex flex-col sm:flex-row justify-center gap-10 md:gap-5 sm:gap-20 bg-white border-[1px] w-fit border-accent-4 rounded-md shadow-md p-8'
        }
      >
        <div className={'flex flex-row gap-3 sm:w-1/3 group'}>
          <div>
            <div className={'w-8 h-8 rounded-md flex justify-center items-center transition ease-in-out delay-150 duration-300'}>
              <HiOutlineCog6Tooth size={25}/>
            </div>
          </div>
          <div className={'flex flex-col mt-0.5'}>
            <h4 className={'font-semibold text-lg mb-3 group-hover:text-tint transition ease-in-out delay-100 duration-300'}>{t('strength1')}</h4>
            <p className='text-sm text-gray-500 group-hover:text-tint-2 transition ease-in-out delay-150 duration-300'>{t('strength1text')}</p>
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
            <h4 className={'font-semibold text-lg mb-3 group-hover:text-tint transition ease-in-out delay-100 duration-300'}>{t('strength2')}</h4>
            <p className='text-sm text-gray-500 group-hover:text-tint-2 transition ease-in-out delay-150 duration-300'>{t('strength2text')}</p>
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
            <h4 className={'font-semibold text-lg mb-3 group-hover:text-tint transition ease-in-out delay-100 duration-300'}>{t('strength3')}</h4>
            <p className='text-sm text-gray-500 group-hover:text-tint-2 transition ease-in-out delay-150 duration-300'>{t('strength3text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrengthsSection;
