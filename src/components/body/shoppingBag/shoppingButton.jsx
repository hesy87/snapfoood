import React from "react";
import styles from "./shoppingButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ShoppingButton = (props) => {

  return (
    <>
      {props.OrderState === 0 ? (
        <button
          onClick={() => {
            props.onPlusHandler(props.item.id);
          }}
          className={styles.Add}
        >
          افزودن
        </button>
      ) : props.OrderState === 1 ? (
        <div className={styles.ShoppingButton}>
          <button
            className={styles.removeShop}
            onClick={() => {
              props.onResetHandler(props.item.id);
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>

          <span className="mx-3">{props.OrderState}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              props.onPlusHandler(props.item.id);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      ) : (
        <div className={styles.ShoppingButton}>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              props.onMinusHandler(props.item.id);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <span className="mx-3">{props.OrderState}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              props.onPlusHandler(props.item.id);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      )}
    </>
  );
};

export default ShoppingButton;
