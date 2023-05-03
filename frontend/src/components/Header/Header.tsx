import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren, useState } from 'react';
import { classNames } from '@/utils/classNames';
import styles from './Header.module.scss';
import Logo from '@/assets/logo-sugo.png';
import { useLockBodyScroll } from '@/utils/hooks';
import { MdChevronRight, MdClose, MdMenu } from 'react-icons/md';
import {useTranslation} from "next-i18next";

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

const MobileNavMenu: FC<{ closeSelf: () => void }> = ({ closeSelf }) => {
  const { t } = useTranslation('common');

  const routes = [t('menu-item1'), t('menu-item2'), t('menu-item3')];
  useLockBodyScroll();

  return (
    <div
      className={'w-screen h-screen fixed top-0 left-0 bg-white z-10 pb-6 p-4'}
    >
      <div className={'container h-full flex flex-col justify-start gap-8'}>
        <div className={'flex flex-row justify-between py-2 items-center'}>
          <Link className={'flex flex-row grow'} href={'/'}>
            <Image src={Logo} alt={'Logo'} width={80} height={25} />
          </Link>
          <button onClick={closeSelf} className={'py-1 px-1'}>
            <MdClose className={'h-8 w-auto'} />
          </button>
        </div>
        <hr className={'border-gray-300 border-1 mx-5'} />
        <div className={'flex flex-col justify-start w-9/12 mx-auto flex-1 '}>
          <ul
            className={
              'flex flex-col list-none gap-10 items-baseline text-xl mb-10'
            }
          >
            {routes.map((navLink: string, index: number) => (
              <li key={index} className={'block w-full'} onClick={closeSelf}>
                <NavigationLink
                  link={navLink.toLowerCase().split(' ').join('-')}
                >
                  <div
                    className={
                      'hover:text-gray-900 py-6 flex flex-row justify-between items-center'
                    }
                  >
                    <span>{navLink}</span>
                    <MdChevronRight className={'h-8 w-auto'} />
                  </div>
                </NavigationLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);
  const { t } = useTranslation('common');

  const routes = [t('menu-item1'), t('menu-item2'), t('menu-item3')];

  return (
    <>
      {!mobileMenuIsShown ? (
        <div className={'flex flex-row sm:mx-20 my-5 px-4 sm:px-0'}>
          <Link className={'flex flex-row grow'} href={'/'}>
            <Image src={Logo} alt={'Logo'} width={100} height={30} />
          </Link>
          <div
            className={classNames(
              'flex flex-row items-center gap-3 sm:gap-8 hidden sm:flex',
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
          <div className={'flex'}>
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className={'p-1 block sm:hidden'}
            >
              <MdMenu className={'h-8 w-auto'} />
            </button>
          </div>
        </div>
      ) : (
        <MobileNavMenu closeSelf={() => setMobileMenuIsShown(false)} />
      )}
    </>
  );
};

export default Header;
