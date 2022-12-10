import React, { useState } from "react";

import styles from "./shoppingButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ShoppingButton = () => {
  let [orderCount, setAddOrder] = useState("");

  const minusHandler = () => {
    orderCount -= 1;
    setAddOrder(Number(orderCount));
  };
  const plusHandler = () => {
    orderCount += 1;
    setAddOrder(Number(orderCount));
  };
  const resetHandler = () => {
    orderCount = '';
    setAddOrder(orderCount);
  }
  return (
    <>
      {orderCount.length === 0 ? (
        <button
          onClick={() => {
            plusHandler();
          }}
          className={styles.Add}
        >
          افزودن
        </button>
      ) : orderCount === 1 ? (
        <div className={styles.ShoppingButton}>
          <button
            className={styles.removeShop}
            onClick={()=> {resetHandler()}}
          >
            <FontAwesomeIcon  icon={faTrashCan}/>
          </button>

          <span className="mx-3">{orderCount}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              plusHandler();
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
              minusHandler();
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <span className="mx-3">{orderCount}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              plusHandler();
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
