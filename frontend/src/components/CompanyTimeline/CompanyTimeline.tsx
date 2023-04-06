import React, {FC} from 'react';

interface CompanyTimelineProps {
    items: CompanyTimelineItemProps[];
    text: any;
}

interface CompanyTimelineItemProps {
    icon: JSX.Element;
    present?: boolean;
}

const CompanyTimeline:FC<CompanyTimelineProps> = ({ items, text }) => {
    return (
        <div className="mt-8 sm:mt-0">
            {items.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-row gap-3">
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex justify-center items-center">
                            {item.icon}
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="font-bold text-xs">{text[index].year}</p>
                            <p className="text-sm">{text[index].text}</p>
                        </div>
                    </div>
                    {!item.present && <div className="h-14 w-0.5 bg-gray-500 ml-8 opacity-30 my-0.5"/>}
                </div>
            ))}
        </div>
    );
};

export default CompanyTimeline;