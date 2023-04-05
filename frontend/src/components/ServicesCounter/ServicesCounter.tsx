import React, { FC } from 'react';
import CountUp, { useCountUp } from 'react-countup';


interface ServicesCounterProps {
  serviceCount: {name: string, count: number}[];
}
const ServicesCounter:FC<ServicesCounterProps> = ({ serviceCount }) => {
  const countUpRef = React.useRef(null);
  useCountUp({
    ref: countUpRef,
    start: 0,
    end: serviceCount[0].count,
    enableScrollSpy: true,
  });

  return (
    <div
      className={
        'flex-col sm:flex-row justify-center gap-10 sm:gap-10 bg-white border-[1px] w-fit border-accent-4 rounded-md shadow-md py-3 px-7 absolute z-10 ml-20 hidden sm:flex'
      }
    >
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 bg-gray-300 rounded-full flex justify-center items-center">
          <div ref={countUpRef} className="font-bold" />
        </div>
        <p className="text-sm mt-1">{serviceCount[0].name}</p>
      </div>
      <div className={'w-full h-[1px] sm:h-16 sm:w-[1px] bg-accent-4'} />
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 bg-gray-300 rounded-full flex justify-center items-center">
          <CountUp enableScrollSpy end={serviceCount[1].count} className="font-bold" />
        </div>
        <p className="text-sm mt-1">{serviceCount[1].name}</p>
      </div>
      <div className={'w-full h-[1px] sm:h-16 sm:w-[1px] bg-accent-4'} />
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 bg-gray-300 rounded-full flex justify-center items-center">
          <CountUp
            enableScrollSpy
            end={serviceCount[2].count}
            separator=""
            className="font-bold"
          />
        </div>
        <p className="text-sm mt-1">{serviceCount[2].name}</p>
      </div>
    </div>
  );
};

export default ServicesCounter;
