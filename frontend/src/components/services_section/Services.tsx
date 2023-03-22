import styles from "./Services.module.css";
import Image from "next/image";

type ServiceItemProps = {
  service_name: string;
};

const ServiceItem = ({ service_name }: ServiceItemProps) => {
  return (
    <div className={styles.Service}>
      <Image
        src="/images/gear-icon.png"
        alt={service_name}
        width={25}
        height={25}
      />
      <p className={styles.Service_Title}>{service_name}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Storitve</h1>
      <p className={styles.Description}>Naše storitve in dejavnosti</p>
      <div className={styles.Services}>
        <ServiceItem service_name="CNC struženje" />
        <ServiceItem service_name="mehanska izdelava" />
        <ServiceItem service_name="svetovanje" />
        <ServiceItem service_name="??" />
      </div>
    </div>
  );
};

export default Services;
