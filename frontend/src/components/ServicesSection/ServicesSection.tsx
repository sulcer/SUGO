import {FC, useRef} from 'react';
import { classNames } from '@/utils/classNames';
import styles from './ServiceSection.module.scss';
import {useInView} from "framer-motion"

type ServiceItemProps = {
  name: string;
  text: string;
};

const services: ServiceItemProps[] = [
    { name: 'Struženje', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed' },
    { name: 'Rezkanje', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed' },
    { name: 'Svetovanje', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed' },
]

const ServiceItem = ({name, text}: ServiceItemProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            className={'flex flex-col gap-5 items-center justify-end text-end sm:items-end sm:text-end z-0'}
        >
            <div className={'flex flex-col items-center gap-2 z-10'}/>
            <h2 className={'text-md font-bold'}>{name}</h2>
            <p className={'text-sm text-gray-500 max-w-xs'}>
                {text}
            </p>
        </div>
    );
};

const ServicesSection: FC = () => {
  return (
    <div className={'bg-accent-3'}>
      <div className={'flex flex-col sm:mx-20 py-10 gap-3'}>
        <div className={'mb-2 text-center sm:text-end'}>
          <h1 className={'text-3xl font-bold'}>Storitve</h1>
          <p className={'text-lg'}>Naše storitve in dejavnosti</p>
        </div>
        <div
          className={classNames(
            'flex flex-col sm:flex-row gap-20 lg:gap-52 items-center justify-end',
            styles.ServiceSelector
          )}
        >
          {services.map((service, index) => (
            <ServiceItem key={index} name={service.name} text={service.text}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
