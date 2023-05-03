import React, { FC, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface FaqAccordionProps {
  question: string;
  answer: string;
}

const FaqAccordion: FC<FaqAccordionProps> = ({ question, answer }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div>
      <div
        className={'flex flex-col hover:bg-accent-3 px-2 py-4 '}
        onClick={() => setActive(!active)}
      >
        <div className={`flex flex-row font-bold gap-4 w-full cursor-pointer`}>
          <p className={'flex-grow'}>{question}</p>
          {active ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </div>
        {active && <p className={'text-tint-2 mt-1'}>{answer}</p>}
      </div>

      <div className={'bg-accent h-[1px] w-full'} />
    </div>
  );
};
export default FaqAccordion;
