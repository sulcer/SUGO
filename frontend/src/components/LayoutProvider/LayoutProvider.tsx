import React, { FC, PropsWithChildren } from 'react';
import { Header } from '@/components';
import Footer from '@/components/Footer/Footer';
import styles from './LayoutProvider.module.scss';

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
