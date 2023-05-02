import React, { FC, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface FaqAccordionProps {
  question: string;
  answer: string;
}

const FaqAccordion: FC<FaqAccordionProps> = ({ question, answer }) => {
  const [active, setActive] = useState<boolean>(false);
  console.log(active);
  return (
    // <div
    //   className={`${
    //     active ? 'h-full' : 'h-20'
    //   } flex flex-col gap-2 bg-accent-3 rounded p-4 cursor-pointer`}
    //   onClick={() => setActive(!active)}
    // >
    //   <div className={'flex flex-row font-bold gap-4 w-full'}>
    //     <p className={'flex-grow'}>{question}</p>
    //     <div className={'text-black'}>
    //       {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
    //     </div>
    //   </div>
    //   {active && <p>{answer}</p>}
    // </div>
    <div>
      <div
        className={'flex flex-col hover:bg-accent-3 px-2 py-4 '}
        onClick={() => setActive(!active)}
      >
        <div className={`flex flex-row font-bold gap-4 w-full cursor-pointer`}>
          <p className={'flex-grow'}>{question}</p>
          {active ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </div>
        {active && <p>{answer}</p>}
      </div>

      <div className={'bg-accent h-[1px] w-full'} />
    </div>
  );
};
export default FaqAccordion;
