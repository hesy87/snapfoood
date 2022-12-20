import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "./shoppingBag.scss";
import OrderContext from "../../../context/selectedFood-context";
import ShoppingButton from "./shoppingButton";

const ShoppingBag = (props) => {
  const { OrderState } =
    useContext(OrderContext);

  return (
    <>
      {OrderState.OrderAmount === 0 ? (
        <div className="shoppingBag mt-5 d-flex flex-column justify-content-center align-items-center">
          <FontAwesomeIcon
            className="basket me-3 mt-3"
            icon={faBasketShopping}
          />
          <p className="mt-3">Your Shopping Bag is Empty !</p>
        </div>
      ) : (
        <div className="container shoppingBagFull">
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div>
                <span>Shapping Bag</span>
                <span className="me-2">
                  {OrderState.OrderAmount}
                </span>
              </div>
              <button className="trash">
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </div>
          <p>{}</p>
          <div className="row selectedFood mt-2">
            <div className="col d-flex flex-column">
              <span>{OrderState.FoodName}</span>
              <div className="d-flex justify-content-between my-3">
                <span className="font1">{OrderState.FoodPrice*OrderState.OrderAmount}</span>
                <ShoppingButton />
              </div>
              <div className="bill">
                <div className="mt-3">
                  <span>Total</span>
                  <span>102 €</span>
                </div>
                <div>
                  <span>Tax</span>
                  <span>Free</span>
                </div>
                <div className="mb-3">
                  <span>Delivery Cost</span>
                  <span>Free</span>
                </div>
              </div>
              <div className="pay">
                <div className="d-flex justify-content-between mb-3">
                  <span>Total Price</span>
                  <span>110 €</span>
                </div>
                <textarea
                  cols="30"
                  rows="3"
                  placeholder="Order Comment..."
                ></textarea>
                <button className="payBtn">Order</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingBag;
