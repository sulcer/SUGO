import React, { FC } from 'react';
import CountUp, { useCountUp } from 'react-countup';

const ServicesCounter:FC = () => {
  const countUpRef = React.useRef(null);
  useCountUp({
    ref: countUpRef,
    start: 0,
    end: 13,
    enableScrollSpy: true,
  });

  return (
    <div
      className={
        'flex-col sm:flex-row justify-center gap-10 sm:gap-10 bg-white border-[1px] w-fit border-accent-4 rounded-md shadow-md py-3 px-7 absolute z-10 ml-20 hidden sm:flex'
      }
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex justify-center items-center">
          <div ref={countUpRef} className="font-bold text-2xl" />
        </div>
        <p className="text-sm mt-1 text-tint-2">let na trgu</p>
      </div>
      <div className={'w-full h-[1px] sm:h-16 sm:w-[1px] bg-accent-4'} />
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex justify-center items-center">
          <CountUp enableScrollSpy end={6} className="font-bold text-2xl"/>
        </div>
        <p className="text-sm mt-1 text-tint-2">strojev</p>
      </div>
      <div className={'w-full h-[1px] sm:h-16 sm:w-[1px] bg-accent-4'} />
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex justify-center items-center">
          <CountUp
            enableScrollSpy
            end={1200}
            separator=""
            className="font-bold text-2xl"
            suffix="+"
          />
        </div>
        <p className="text-sm mt-1 text-tint-2">projektov</p>
      </div>
    </div>
  );
};

export default ServicesCounter;
