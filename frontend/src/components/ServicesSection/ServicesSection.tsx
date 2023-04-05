import { FC } from 'react';

type ServiceItemProps = {
  name: string;
};

interface ServicesSectionProps {
    services: { name: string }[];
}

const ServiceItem = ({ name }: ServiceItemProps) => {
  return (
      <div className={'flex flex-col items-center gap-2'}>
        <div className={'flex flex-col items-center gap-2 justify-center bg-accent-4 rounded-full h-24 w-24'}>
            <p>{name}</p>
        </div>
      </div>
  );
};

const ServicesSection:FC<ServicesSectionProps> = ({ services }) => {
  return (
    <div className={'bg-accent-3'}>
      <div className={'flex flex-col sm:mx-20 py-10'}>
        <div className={'mb-4 text-center sm:text-start'}>
          <h1 className={'text-3xl font-bold'}>Storitve</h1>
          <p className={'text-xl'}>Naše storitve in dejavnosti</p>
        </div>
        <div className={'flex flex-col sm:flex-row gap-8 items-center sm:justify-between'}>
            {services.map((service, index) => (
                <ServiceItem key={index} name={service.name} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
