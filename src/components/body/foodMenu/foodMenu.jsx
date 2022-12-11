import React, { useState,useContext } from "react";
import OrderContext from "../../../context/selectedFood-context";
import styles from "./foodMenu.module.scss";
import rostbeef from "../../img/foodMenu/rostbeefitalia.jpeg";
import mexic from "../../img/foodMenu/rostbeefmexic.jpeg";
import chicken from "../../img/foodMenu/chickenalferedoitalia.jpeg";
import beiken from "../../img/foodMenu/beikenitalia.jpeg";
import peperoni from "../../img/foodMenu/peperoniitalia.jpeg";
import choritso from "../../img/foodMenu/choritsoitalia.jpeg";
import vegetable from "../../img/foodMenu/vegetableitalia.jpeg";
import margarita from "../../img/foodMenu/margaritaitalia.jpeg";

import ShoppingButton from "../shoppingBag/shoppingButton";

const italianPizza = [
  {
    id: "p1",
    name: "پیتزا رست بیف ایتالیایی",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم)خمیر پیتزا دست ساز ایتالیایی، سس گوجه فرنگی، ۲۰ گرم گوشت گوساله ریش ریش شده، سس گریوی، پیاز کارام...",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 49000,
    currency: "تومان",
    pic: rostbeef,
  },
  {
    id: "p2",
    name: "پیتزا مکزیکی ایتالیایی",
    discription:
      "خمیر پیتزا ایتالیایی، ۵۰ گرم گوشت چرخ شده گوسفندی، پنیر پیتزا مخصوص، هالوپینو، سس مخصوص مکزیکی تند، فلفل دلمه ای رست شده، سس گوجه،...",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 45000,
    currency: "تومان",
    pic: mexic,
  },
  {
    id: "p3",
    name: "پیتزا چیکن آلفردو ایتالیایی",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سس قارچ، سینه مرغ طعم دار شده، قارچ، سیر، زیتون سیاه، پنیر پیتزا م...",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 41000,
    currency: "تومان",
    pic: chicken,
  },
  {
    id: "p4",
    name: "پیتزا بیکن ایتالیایی",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سس گوجه فرنگی، بیکن گوشت ۹۷%، پیاز کاراملی، قارچ، پنیر پیتزا مخصوص",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 44000,
    currency: "تومان",
    pic: beiken,
  },
  {
    id: "p5",
    name: "پیتزا پپرونی ایتالیایی",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سس گوجه فرنگی، ژامبون پپرونی، فلفل هالوپینو، زیتون، پنیر پیتزا مخص...",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 43000,
    currency: "تومان",
    pic: peperoni,
  },
  {
    id: "p6",
    name: "پیتزا چهار پنیر و چوریتسو ایتالیایی",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سوسیس چوریتسو مخلوط گوشت و مرغ ۹۰%، چهار پنیر پیتزا مخصوص، قارچ، گ...",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 45000,
    currency: "تومان",
    pic: choritso,
  },
  {
    id: "p7",
    name: "پیتزا سبزیجات ایتالیایی",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سس گوجه فرنگی، بیبی اسفناج، کدو، بادمجان، بیبی کرن، زیتون سیاه، فل.",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 39000,
    currency: "تومان",
    pic: vegetable,
  },
  {
    id: "p8",
    name: "پیتزا مارگاریتا ایتالیایی",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سس گوجه فرنگی، گوجه چری، پنیر پیتزا مخصوص، پنیر موزارلا",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 29000,
    currency: "تومان",
    pic: margarita,
  },
];

const FoodMenu = (props) => {
  const [OrderList,setOrderList] = useState(0);
var orderList = []
  const selectOrderId = (id) => {
    let foodObject = italianPizza.find(item => item.id === id);
    let orderArray = [foodObject.name , foodObject.price,foodObject.id,foodObject.currency]
    orderList.push(orderArray)
    setOrderList('orderList')
  };
  return (
    <OrderContext.Provider value={OrderList}>
      <div className={`${styles.FoodMenu} mt-5 `}>
        <p className="mt-5 text-center">پیتزا ایتالیایی</p>
        <div className="container text-center">
          <div className="row row-cols-2">
            {italianPizza.map((item) => (
              <div key={item.id} className={`${styles.foodCard} p-0 col`}>
                <div className="d-flex py-3 pe-2">
                  <div className="d-flex flex-column ms-1 col-7">
                    <span className={`${styles.foodTitle} mb-2`}>
                      {item.name}
                    </span>
                    <span className={styles.foodDiscription}>
                      {item.discription}
                    </span>
                  </div>
                  <div className="col-5 ps-2">
                    <img className="img-fluid" src={item.pic} alt="foodPic" />
                  </div>
                </div>
                <div
                  className={`${styles.addToCard} pt-2 pb-4 d-flex justify-content-between`}
                >
                  <div className="pe-2 d-flex flex-column">
                    <span>{item.unit}</span>
                    <span>{`${item.price} ${item.currency}`}</span>
                  </div>
                  <div className="ms-2">
                    <ShoppingButton
                      onSelectOrderId={selectOrderId}
                      itemId={item.id}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </OrderContext.Provider>
  );
};

export default FoodMenu;
