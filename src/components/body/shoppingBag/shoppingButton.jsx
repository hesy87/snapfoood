import React, { useState,useRef } from "react";
import styles from "./shoppingButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ShoppingButton = (props) => {

  // const OrderAmount = useRef();

  let [orderCount, setAddOrder] = useState('');

  const minusHandler = (id) => {
    setAddOrder(Number(orderCount - 1));
  };
  const plusHandler = (id) => {
    setAddOrder(Number(orderCount + 1));
  };
  const resetHandler = (id) => {
    setAddOrder('');
  };
  
  return (
    <>
      {orderCount.length === 0 ? (
        <button
          onClick={() => {
            plusHandler(props.item.id);
          }}
          className={styles.Add}
        >
          افزودن
        </button>
      ) : orderCount === 1 ? (
        <div className={styles.ShoppingButton}>
          <button
            className={styles.removeShop}
            onClick={() => {
              resetHandler();
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>

          <span className="mx-3">{orderCount}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              plusHandler(props.item);
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
              minusHandler(props.item);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <span className="mx-3">{orderCount}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              plusHandler(props.item);
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
