import { FC } from 'react';
import { HiOutlineHome } from 'react-icons/hi2';
import { classNames } from '@/utils/classNames';
import styles from './ServiceSection.module.scss';

type ServiceItemProps = {
  name: string;
};

interface ServicesSectionProps {
  services: { name: string }[];
}

const ServiceItem = ({ name }: ServiceItemProps) => {
  return (
    <div
      className={
        'flex flex-col gap-5 items-center justify-end text-end sm:items-end sm:text-end z-0'
      }
    >
      <div className={'flex flex-col items-center gap-2 z-10'}>
        <div
          className={
            'flex flex-col items-center gap-2 justify-center bg-gray-300 rounded-full h-16 w-16 border-2'
          }
        >
          <HiOutlineHome size={20} />
        </div>
      </div>
      <h2 className={'text-md font-bold'}>{name}</h2>
      <p className={'text-sm text-gray-500 max-w-xs'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      </p>
    </div>
  );
};

const ServicesSection: FC<ServicesSectionProps> = ({ services }) => {
  return (
    <div className={'bg-accent-3'}>
      <div className={'flex flex-col sm:mx-20 py-16 gap-5'}>
        <div className={'mb-4 text-center sm:text-end'}>
          <h1 className={'text-3xl font-bold'}>Storitve</h1>
          <p className={'text-xl'}>Naše storitve in dejavnosti</p>
        </div>
        <div
          className={classNames(
            'flex flex-col sm:flex-row gap-20 lg:gap-52 items-center justify-end',
            styles.ServiceSelector
          )}
        >
          {services.map((service, index) => (
            <ServiceItem key={index} name={service.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
