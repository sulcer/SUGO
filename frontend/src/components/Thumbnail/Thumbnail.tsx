import styles from './Thumbnail.module.css';
import { FC } from 'react';
import Image from 'next/image';
import Test from '../../assets/gallery/test.jpeg';

const Thumbnail: FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Info}>
        <h1 className={styles.Title}>Mehanska obdelava kovin in druge storitve</h1>
        <p className={styles.Description}>Kakovostne storitve za vaše inovativne ideje</p>
      </div>
      <div className={styles.radialContainer}></div>
      <Image
        src={Test}
        alt=""
        layout="fill"
        objectFit="cover"
        className={styles.bgImage}
      />
    </div>
  );
};

export default Thumbnail;
