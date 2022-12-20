import styles from "./deliveryTime.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const DeliveryTime = () => {
  return (
    <div
      className={`${styles.DeliveryTime} bg-white mt-5 d-flex align-items-center justify-content-around`}
    >
      <FontAwesomeIcon className={`${styles.clock} me-3`} icon={faClock} />
      <p>Delivery in Nearest Time</p>
      <FontAwesomeIcon
        className={`${styles.chevron} me-3`}
        icon={faChevronDown}
      />
    </div>
  );
};

export default DeliveryTime;
