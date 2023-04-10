import styles from './Thumbnail.module.css';
import { FC } from 'react';
import Image from 'next/image';
import Test from '../../assets/gallery/test.jpeg';

interface ThumbnailProps {
  thumbnail: { short: string; heading: string };
}

const imageUrl = '../../assets/gallery/test.jpeg';

const Thumbnail: FC<ThumbnailProps> = ({ thumbnail }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Info}>
        <h1 className={styles.Title}>{thumbnail.heading}</h1>
        <p className={styles.Description}>{thumbnail.short}</p>
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
