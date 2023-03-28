import React, {FC} from 'react';

interface CompanyTimelineProps {
    items: CompanyTimelineItemProps[];
}

interface CompanyTimelineItemProps {
    year: number;
    title: string;
    icon: JSX.Element;
    present?: boolean;
}

const CompanyTimeline:FC<CompanyTimelineProps> = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <>
                    <div className="flex flex-row gap-3" key={index}>
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex justify-center items-center">
                            {item.icon}
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="font-bold text-xs">{item.year}</p>
                            <p className="text-sm">{item.title}</p>
                        </div>
                    </div>
                    {!item.present && <div className="h-14 w-0.5 bg-gray-500 ml-8 opacity-30 my-0.5" key={index}/>}
                </>
            ))}
        </div>
    );
};

export default CompanyTimeline;