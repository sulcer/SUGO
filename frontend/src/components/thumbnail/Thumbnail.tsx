import styles from "./Thumbnail.module.css";
import {FC} from "react";

interface ThumbnailProps {
    thumbnail: {short: string, heading: string}
}
const Thumbnail:FC<ThumbnailProps> = ({ thumbnail }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Info}>
        <h1 className={styles.Title}>
            {thumbnail.heading}
        </h1>
        <p className={styles.Description}>
            {thumbnail.short}
        </p>
      </div>
      <div className={styles.Image_Container}>
      </div>
    </div>
  );
};

export default Thumbnail;
