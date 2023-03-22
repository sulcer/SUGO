import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <h1 className={styles.Logo_Text}>SUG</h1>
        <Image src="/images/gear-icon.png" alt="Logo" width={30} height={30} />
      </div>
      <div className={styles.Nav_Links}>
        <Link href="/">Strojni park</Link>
        <Link href="/">Naši izdelki</Link>
        <Link href="/">Kontakt</Link>
      </div>
    </div>
  );
};

export default Header;
