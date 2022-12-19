import React, { useState,useContext } from "react";
import styles from "./shoppingButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import OrderContext from "../../../context/selectedFood-context";

const ShoppingButton = (props) => {
// const [OrderState,setOrderState] = useState({OrderAmount:0 , FoodName:'',FoodPrice:0})

const { items, setItems,OrderState,onPlusHandler } = useContext(OrderContext);

// const onResetHandler =(Name,price) => {
//   setOrderState({OrderAmount : Number(0) ,FoodName:Name,FoodPrice:Number(price)})
// }

// const onPlusHandler = (Name,price) => {
//   setOrderState({OrderAmount : Number(OrderState.OrderAmount)+1,FoodName:Name,FoodPrice:Number(price)})
// }

// const onMinusHandler = (Name,price) => {
//   setOrderState({OrderAmount : Number(OrderState.OrderAmount)-1,FoodName:Name,FoodPrice:Number(price)})
// }
  return (
    <>
      {OrderState.OrderAmount === 0 ? (
        <button id={props.items.id}
          onClick={() => {
            onPlusHandler(props.items.name,props.items.price);
          }}
          className={styles.Add}
        >
          افزودن
        </button>
      ) : OrderState.OrderAmount === 1 ? (
        <div className={styles.ShoppingButton}>
          <button
            className={styles.removeShop}
            onClick={() => {
              // onResetHandler(props.items.name,props.items.price);
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>

          <span className="mx-3">{OrderState.OrderAmount}</span>
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
              // onMinusHandler(props.items.name,props.items.price);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <span className="mx-3">{OrderState.OrderAmount}</span>
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
