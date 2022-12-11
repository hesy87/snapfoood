import React, { useState } from "react";

import styles from "./shoppingButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ShoppingButton = (props) => {
  let [orderCount, setAddOrder] = useState('');

  const minusHandler = (id) => {
    orderCount -= 1;
    setAddOrder(Number(orderCount));
    props.onSelectOrderId(id);
  };
  const plusHandler = (id) => {
    orderCount += 1;
    setAddOrder(Number(orderCount));
    props.onSelectOrderId(id);
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
            plusHandler(props.itemId);
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
              plusHandler(props.itemId);
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
              minusHandler(props.itemId);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <span className="mx-3">{orderCount}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              plusHandler(props.itemId);
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
