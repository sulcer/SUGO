import React, {FC} from 'react';
import CountUp, {useCountUp} from "react-countup";

const ServicesCounter:FC = () => {
    const countUpRef = React.useRef(null);
    useCountUp({
        ref: countUpRef,
        start:0,
        end: 10,
        enableScrollSpy: true,
    });

    return (
        <div className={'flex flex-col sm:flex-row justify-center gap-10 sm:gap-10 bg-white border-[1px] w-fit border-accent-4 rounded-md shadow-md py-3 px-7 absolute z-10 ml-20'}>
            <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-300 rounded-full flex justify-center items-center">
                    <div ref={countUpRef} className="font-bold"/>
                </div>
                <p className="text-sm mt-1">let na trgu</p>
            </div>
            <div className={'w-full h-[1px] sm:h-16 sm:w-[1px] bg-primary'} />
            <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-300 rounded-full flex justify-center items-center">
                    <CountUp enableScrollSpy end={17} className="font-bold"/>
                </div>
                <p className="text-sm mt-1">strojev</p>
            </div>
            <div className={'w-full h-[1px] sm:h-16 sm:w-[1px] bg-primary'} />
            <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-300 rounded-full flex justify-center items-center">
                    <CountUp enableScrollSpy end={1234} separator='' className="font-bold"/>
                </div>
                <p className="text-sm mt-1">projektov</p>
            </div>
        </div>
    );
};

export default ServicesCounter;