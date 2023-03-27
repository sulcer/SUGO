import React, {FC} from 'react';
interface FooterSectionProps {
    title?: string;
    items: { icon: JSX.Element; text: string }[];
}
const FooterSection:FC<FooterSectionProps> = ({ title, items }) => {
    return (
        <div className="mt-1.5 sm:mt-0">
            {title &&
                <>
                    <p className="text-white font-bold mb-0.5 text-lg">{title}</p>
                    <div className="relative">
                        <div className="border-t border-white border-2 mb-5 w-16 blur-sm absolute"></div>
                        <div className="border-t border-white border-2 mb-5 w-16 relative absolute"></div>
                    </div>
                </>
            }
            <div className="flex flex-col gap-1">
                {items.map((item, index) => (
                    <div className="flex items-center gap-1.5" key={index}>
                        {item.icon}
                        <p className="text-white text-sm opacity-80">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FooterSection;