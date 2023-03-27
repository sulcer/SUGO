import styles from "./Thumbnail.module.css";
import Image from "next/image";

const Thumbnail = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Info}>
        <h1 className={styles.Title}>
          <span className={styles.Title_Span}>Mehanska obdelava </span>
          kovin in druge storitve
        </h1>
        <p className={styles.Description}>
          Kovine obdelujemo s stroji, ki delajo razliko - za vas ustvarjamo
          najboljše. Kakovostne storitve za vaše inovativne ideje.
        </p>
      </div>
      <div className={styles.Image_Container}>
        {/* <Image src="/" alt="Thumbnail" /> */}
      </div>
    </div>
  );
};

export default Thumbnail;
