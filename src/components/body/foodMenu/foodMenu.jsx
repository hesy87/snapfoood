import React from "react";
import styles from "./foodMenu.module.scss";
import rostbeef from "../../img/foodMenu/rostbeefitalia.jpeg";
import mexic from "../../img/foodMenu/rostbeefmexic.jpeg";
import chicken from "../../img/foodMenu/chickenalferedoitalia.jpeg";
import beiken from "../../img/foodMenu/beikenitalia.jpeg";
import peperoni from "../../img/foodMenu/peperoniitalia.jpeg";
import choritso from "../../img/foodMenu/choritsoitalia.jpeg";
import vegetable from "../../img/foodMenu/vegetableitalia.jpeg";
import margarita from "../../img/foodMenu/margaritaitalia.jpeg";
import FoodCard from './foodCard';

const italianPizza = [
  {
    id: "p1",
    name: "Italian Pizza No1",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم)خمیر پیتزا دست ساز ایتالیایی، سس گوجه فرنگی، ۲۰ گرم گوشت گوساله ریش ریش شده، سس گریوی، پیاز کارام...",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 49000,
    currency: "تومان",
    pic: rostbeef,
  },
  {
    id: "p2",
    name: "Italian Pizza No2",
    discription:
      "خمیر پیتزا ایتالیایی، ۵۰ گرم گوشت چرخ شده گوسفندی، پنیر پیتزا مخصوص، هالوپینو، سس مخصوص مکزیکی تند، فلفل دلمه ای رست شده، سس گوجه،...",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 45000,
    currency: "تومان",
    pic: mexic,
  },
  {
    id: "p3",
    name: "Italian Pizza No3",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سس قارچ، سینه مرغ طعم دار شده، قارچ، سیر، زیتون سیاه، پنیر پیتزا م...",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 41000,
    currency: "تومان",
    pic: chicken,
  },
  {
    id: "p4",
    name: "Italian Pizza No4",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سس گوجه فرنگی، بیکن گوشت ۹۷%، پیاز کاراملی، قارچ، پنیر پیتزا مخصوص",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 44000,
    currency: "تومان",
    pic: beiken,
  },
  {
    id: "p5",
    name: "Italian Pizza No5",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سس گوجه فرنگی، ژامبون پپرونی، فلفل هالوپینو، زیتون، پنیر پیتزا مخص...",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 43000,
    currency: "تومان",
    pic: peperoni,
  },
  {
    id: "p6",
    name: "Italian Pizza No6",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سوسیس چوریتسو مخلوط گوشت و مرغ ۹۰%، چهار پنیر پیتزا مخصوص، قارچ، گ...",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 45000,
    currency: "تومان",
    pic: choritso,
  },
  {
    id: "p7",
    name: "Italian Pizza No7",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سس گوجه فرنگی، بیبی اسفناج، کدو، بادمجان، بیبی کرن، زیتون سیاه، فل.",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 39000,
    currency: "تومان",
    pic: vegetable,
  },
  {
    id: "p8",
    name: "Italian Pizza No8",
    discription:
      "یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم) خمیر پیتزا دست ساز ایتالیایی، سس گوجه فرنگی، گوجه چری، پنیر پیتزا مخصوص، پنیر موزارلا",
    unit: "یک اسلایس (۱۴*۲۵ سانتی متری)",
    price: 29000,
    currency: "تومان",
    pic: margarita,
  },
];

const FoodMenu = (props) => {

  return (
    <>
      <div className={`${styles.FoodMenu} mt-5 `} >
        <p className="mt-5 text-center">پیتزا ایتالیایی</p>
        <div className="container text-center">
          <div className="row row-cols-2">
            <FoodCard italianPizza={italianPizza} id={italianPizza.id}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
