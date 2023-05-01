import React, { FC, useRef } from 'react';
import { classNames } from '@/utils/classNames';
import styles from './ServiceSection.module.scss';
import { useInView } from 'framer-motion';
import { RiSettings2Fill, RiTeamFill, RiToolsLine } from 'react-icons/ri';

type ServiceItemProps = {
  name: string;
  text: string;
  icon: React.ReactNode;
};

const services: ServiceItemProps[] = [
  {
    name: 'Struženje',
    text: 'Precizna obdelava kovin za natančne rezultate in visoko kakovostne izdelke.',
    icon: <RiSettings2Fill size={20} />,
  },
  {
    name: 'Rezkanje',
    text: 'Uporaba vrhunske opreme za natančno rezkanje kovin za vaše posebne zahteve',
    icon: <RiToolsLine size={20} />,
  },
  {
    name: 'Svetovanje',
    text: 'Naše strokovno svetovanje vam pomaga doseči vaše cilje s kovinsko obdelavo.',
    icon: <RiTeamFill size={20} />,
  },
];

const ServiceItem = ({ name, text, icon }: ServiceItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className={'flex flex-col gap-7 items-center sm:text-end z-0'}
    >
      <div className={'flex flex-col items-center z-10'}>
        <div
          className={
            'flex flex-col items-center gap-2 justify-center bg-gray-300 rounded-full h-16 w-16 border-2'
          }
        >
          {icon}
        </div>
      </div>
      <h2 className={'font-semibold text-lg'}>{name}</h2>
      <p className={'text-sm text-gray-600 max-w-xs text-start'}>{text}</p>
    </div>
  );
};

const ServicesSection: FC = () => {
  return (
    <div className={'bg-accent-3'}>
      <div className={'flex flex-col sm:mx-20 py-10 gap-7'}>
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
            <ServiceItem
              key={index}
              name={service.name}
              text={service.text}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
