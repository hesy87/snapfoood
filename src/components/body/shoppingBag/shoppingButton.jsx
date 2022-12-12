import React, { useState } from "react";

import styles from "./shoppingButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
let array = [];
const ShoppingButton = (props) => {
  let [orderCount, setAddOrder] = useState("");
  let [OrderList, setOrderList] = useState([]);
  
  const minusHandler = (name) => {
    setAddOrder(Number(orderCount - 1));
  };
  const plusHandler = (name) => {
    setAddOrder(Number(orderCount + 1));
    array.push(name);
    setOrderList(array);
    props.onSelectOrderCount(OrderList);
  };
  const resetHandler = () => {
    setAddOrder(orderCount = "");
  };
  return (
    <>
      {orderCount.length === 0 ? (
        <button
          onClick={() => {
            plusHandler(props.item.name);
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
              plusHandler(props.item.name);
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
              minusHandler(props.item.name);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <span className="mx-3">{orderCount}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              plusHandler(props.item.name);
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
