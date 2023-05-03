import styles from './Thumbnail.module.css';
import { FC } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"
import thumbnail from '../../assets/thumbnail.png';
import {useTranslation} from "next-i18next";

const Thumbnail: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.Container}>
      <div className={styles.Info}>
          <motion.div animate={{ x: 0 }} initial={{ x: -100, speed: 5 }}>
              <h1 className={`${styles.Title}`}>{t('thumbnail')}</h1>
              <p className={`${styles.Description}`}>{t('description')}</p>
          </motion.div>
      </div>
      <div className={styles.radialContainer}></div>
      <Image src={thumbnail}
             alt={'test'}
             className={'mx-auto w-[75%] sm:mt-10'}
             quality={100}
      />
    </div>
  );
};

export default Thumbnail;
