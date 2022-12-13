import React, { useReducer } from "react";
import styles from "./shoppingButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ShoppingButton = (props) => {
  const [OrderState, setOrderState] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    {
      OrderAmount: 0,
      OrderId: "",
    }
  );

  const plusHandler = (id) => {
    setOrderState({
      OrderAmount: OrderState.OrderAmount ,
      OrderId: id,
    });
    console.log(OrderState);
  };
  const minusHandler = (id) => {
    setOrderState({
      OrderAmount: OrderState.OrderAmount - 1,
      OrderId: id,
    });
    console.log(OrderState);
  };
  const resetHandler = (id) => {
    setOrderState({ OrderAmount: "", OrderId: "" });
  };

  return (
    <>
      {OrderState.OrderAmount === 0 ? (
        <button
          onClick={() => {
            OrderState.OrderAmount +=1;
            plusHandler(props.item.id);
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
              resetHandler();
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>

          <span className="mx-3">{OrderState.OrderAmount}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              OrderState.OrderAmount +=1;
              plusHandler(props.item.id);
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
              minusHandler(props.item.id);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <span className="mx-3">{OrderState.OrderAmount}</span>
          <button
            className={styles.AddRemoveBtn}
            onClick={() => {
              plusHandler(props.item.id);
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
