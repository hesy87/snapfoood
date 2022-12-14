import styles from "./courier.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const CourierPrice = () => {
  return (
    <div className={`${styles.CourierPrice} py-3 mt-3 d-flex justify-content-around`}>
      <FontAwesomeIcon className={styles.truck} icon={faTruck} />
      <span className={styles.courierOption}>Seller Courier</span>
      <span className={styles.courierPrice}>Free</span>
    </div>
  );
};

export default CourierPrice;
