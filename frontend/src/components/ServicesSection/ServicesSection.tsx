import Image from 'next/image';
import GearIcon from '@/assets/gear-icon.svg';
import { FC } from 'react';

type ServiceItemProps = {
  name: string;
};

const ServiceItem = ({ name }: ServiceItemProps) => {
  return (
    <div
      className={
        'flex flex-col items-center gap-2 justify-center bg-accent-4 rounded-full h-48 w-48'
      }
    >
      <Image src={GearIcon} alt={name} width={25} height={25} />
      <p className={'text-center'}>{name}</p>
    </div>
  );
};

const ServicesSection: FC = () => {
  return (
    <div className={'bg-accent-3'}>
      <div className={'flex flex-col sm:mx-20 py-10'}>
        <div className={'mb-4 text-center sm:text-start'}>
          <h1 className={'text-3xl font-bold'}>Storitve</h1>
          <p className={'text-xl'}>Naše storitve in dejavnosti</p>
        </div>
        <div
          className={
            'flex flex-col sm:flex-row gap-8 items-center sm:justify-between'
          }
        >
          <ServiceItem name="CNC struženje" />
          <ServiceItem name="mehanska izdelava" />
          <ServiceItem name="svetovanje" />
          <ServiceItem name="??" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
