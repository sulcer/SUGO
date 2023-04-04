import styles from "./Thumbnail.module.css";

const Thumbnail = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Info}>
        <h1 className={styles.Title}>
          <span className={styles.Title_Span}>Mehanska obdelava </span>
          kovin in druge storitve
        </h1>
        <p className={styles.Description}>
         Kakovostne storitve za vaše inovativne ideje.
        </p>
      </div>
      <div className={styles.Image_Container}>
      </div>
    </div>
  );
};

export default Thumbnail;
