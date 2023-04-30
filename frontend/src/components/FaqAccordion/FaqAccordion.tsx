import React, {FC, useState} from 'react';

interface FaqAccordionProps {
    question: string;
    answer: string;
}

const FaqAccordion:FC<FaqAccordionProps> = ({ question, answer }) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={`${active ? 'h-full' : 'h-20'} flex flex-col gap-2 bg-accent-4 rounded p-4`} onClick={() => setActive(!active)}>
            <div className={'font-bold'}>{question}</div>
            { active && <p>{answer}</p> }
        </div>
    );
};
export default FaqAccordion;