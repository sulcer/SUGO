import styles from "./StrengthsSection.module.css";
import Image from "next/image";

const StrengthItem = () => {
  return (
    <div className={styles.Strength}>
      <div className={styles.Strength_Name}>
        <Image
          src="/images/gear-icon.png"
          alt="Strength"
          width={25}
          height={25}
        />
        <h3 className={styles.Strength_Title}>Strojna obdelava</h3>
      </div>

      <p className={styles.Strength_Description}>Prednost</p>
    </div>
  );
};

const StrengthsSection = () => {
  return (
    <div className={styles.Container}>
      <h1>Naše prednosti</h1>
      <section className={styles.Strengths}>
        <StrengthItem />
        <StrengthItem />
        <StrengthItem />
      </section>
    </div>
  );
};

export default StrengthsSection;
