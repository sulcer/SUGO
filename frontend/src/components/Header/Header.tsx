import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { classNames } from '@/utils/classNames';
import styles from './Header.module.scss';
import GearIcon from '@/assets/gear-icon.svg';

const routes = ['Strojni park', 'Naši izdelki', 'Kontakt'];

const NavigationLink: FC<PropsWithChildren & { link?: string }> = ({
  children,
  link = '/',
}) => {
  return (
    <Link className={'font-semibold'} href={link}>
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <div className={'flex flex-row mx-4 sm:mx-20 mt-4'}>
      <div className={'flex flex-row grow'}>
        <h1 className={'font-bold text-accent-2 text-3xl'}>SUG</h1>
        <div className={'flex items-center'}>
          <Image src={GearIcon} alt="Logo" width={30} height={30} />
        </div>
      </div>
      <div
        className={classNames(
          'flex flex-row items-center gap-3 sm:gap-8',
          styles.NavLinks
        )}
      >
        {routes.map((route, index) => (
          <NavigationLink key={index}>{route}</NavigationLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
