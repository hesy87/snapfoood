import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "./shoppingBag.scss";
import ShoppingButton from "./shoppingButton";
import OrderContext from "../../../context/selectedFood-context";

const ShoppingBag = (props) => {
  return (
    <>
      <div className=" d-none shoppingBag mt-5 d-flex flex-column justify-content-center align-items-center">
        <FontAwesomeIcon className="basket me-3 mt-3" icon={faBasketShopping} />
        <p className="mt-3">سبد خرید شما خالی است!</p>
      </div>
      <div className="container shoppingBagFull">
        <div className="row">
          <div className="col d-flex justify-content-between">
            <div>
              <span>سبد خرید</span>
              <span className="me-2"></span>
            </div>
            <button className="trash">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
        <div className="row selectedFood mt-2">
          <div className="col d-flex flex-column">
            <span>{}</span>
            <div className="d-flex justify-content-between my-3">
              <span>۲۰۲,۰۰۰ تومان</span>
              <ShoppingButton />
            </div>
            <div className="bill">
              <div className="mt-3">
                <span>مجموع</span>
                <span>۱۰۲,۰۰۰ تومان</span>
              </div>
              <div>
                <span>هزینه بسته‌بندی</span>
                <span>۶,۰۰۰ تومان</span>
              </div>
              <div>
                <span>مالیات</span>
                <span>رایگان</span>
              </div>
              <div>
                <span>هزینه ارسال</span>
                <span>رایگان</span>
              </div>
              <div className="mb-3">
                <span>سود شما از این خرید</span>
                <span>۳۰,۰۰۰ تومان</span>
              </div>
            </div>
            <div className="pay">
              <div className="d-flex justify-content-between mb-3">
                <span>قابل پرداخت</span>
                <span>۱۰۸,۰۰۰ تومان</span>
              </div>
              <textarea
                cols="30"
                rows="3"
                placeholder="توضیحات سفارش..."
              ></textarea>
              <button className="payBtn">ثبت سفارش</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingBag;
