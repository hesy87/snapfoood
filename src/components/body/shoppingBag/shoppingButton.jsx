import React, { useState,useContext } from "react";
import styles from "./shoppingButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import OrderContext from "../../../context/selectedFood-context";

const ShoppingButton = (props) => {

const [OrderAmountShow,setOrderAmountShow] = useState(0)

const { OrderState,SetOnPlusHandler} = useContext(OrderContext);

const onPlusHandler = (Name,price) => {
  setOrderAmountShow(Number(OrderAmountShow)+1)
  SetOnPlusHandler({
    OrderAmount : Number(OrderState.OrderAmount)+1,
    FoodName:Name,
    FoodPrice:Number(price)
  })
}
const onMinusHandler = (Name,price) => {
  setOrderAmountShow(Number(OrderAmountShow)-1)
  SetOnPlusHandler({
    OrderAmount : Number(OrderState.OrderAmount)-1,
    FoodName:Name,
    FoodPrice:Number(price)
  })
}
const onResetHandler = (Name,price) => {
  setOrderAmountShow(0)
  SetOnPlusHandler({
    OrderAmount : 0,
    FoodName:Name,
    FoodPrice:Number(price)
  })
}

  return (
    <>
      {OrderAmountShow === 0  ? (
        <button
          onClick={() => {
            onPlusHandler(props.items.name,props.items.price);
          }}
          className={styles.Add}
        >
          Order
        </button>
      ) : OrderAmountShow === 1 ? (
        <div className={styles.ShoppingButton}>
          <button
            className={styles.removeShop}
            onClick={() => {
              onResetHandler(props.items.name,props.items.price);
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>

          <span className="mx-3">{OrderAmountShow}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              onPlusHandler(props.items.name,props.items.price);
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
              onMinusHandler(props.items.name,props.items.price);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <span className="mx-3">{OrderAmountShow}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              onPlusHandler(props.items.name,props.items.price);
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
