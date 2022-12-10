import styles from "./shoppingButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ShoppingButton = () => {
  return (
    <>
    {/* <button className={styles.Add}>افزودن</button> */}
    <div className={styles.ShoppingButton}>
      <button className={styles.AddRemoveBtn}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      {/* <button className={styles.removeShop}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button> */}
      <span className="mx-3">2</span>
      <button className={styles.AddRemoveBtn}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
    </>
  );
};

export default ShoppingButton;
