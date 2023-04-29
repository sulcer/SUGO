import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { classNames } from '@/utils/classNames';
import styles from './Header.module.scss';
import Logo from '@/assets/SUGO-logo.png';

const routes = ['Strojni park', 'Izdelki', 'Kontakt'];

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
    <div className={'flex flex-row sm:mx-20 my-1 px-4 sm:px-0'}>
      <Link className={'flex flex-row grow'} href={'/'}>
        <Image src={Logo} alt={'Logo'} width={100} height={30} />
      </Link>
      <div
        className={classNames(
          'flex flex-row items-center gap-3 sm:gap-8',
          styles.NavLinks
        )}
      >
        {routes.map((route, index) => (
          <NavigationLink
            key={index}
            link={route.toLowerCase().split(' ').join('-')}
          >
            {route}
          </NavigationLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
