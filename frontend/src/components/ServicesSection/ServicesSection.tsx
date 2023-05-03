import React, { FC, useRef } from 'react';
import { classNames } from '@/utils/classNames';
import styles from './ServiceSection.module.scss';
import { useInView } from 'framer-motion';
import {useTranslation} from "next-i18next";

type ServiceItemProps = {
  name: string;
  text: string;
};

const ServiceItem = ({ name, text }: ServiceItemProps) => {
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
      <h2 className={'font-semibold text-lg'}>{name}</h2>
      <p className={'text-sm text-gray-600 max-w-xs text-start'}>{text}</p>
    </div>
  );
};

const ServicesSection: FC = () => {
  const { t } = useTranslation('common');

  const services: ServiceItemProps[] = [
    {
      name: t('service1'),
      text: t('service1text'),
    },
    {
      name: t('service2'),
      text: t('service2text'),
    },
    {
      name: t('service3'),
      text: t('service3text'),
    },
  ];

  return (
    <div className={'bg-accent-3'}>
      <div className={'flex flex-col sm:mx-20 py-10 gap-7'}>
        <div className={'mb-2 text-center sm:text-end'}>
          <h1 className={'text-3xl font-bold'}>{t('services')}</h1>
          <p className={'text-lg'}>{t('services_text')}</p>
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
