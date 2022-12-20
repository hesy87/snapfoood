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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    unit: "30*30cm peice",
    price: 49,
    currency: "€",
    pic: rostbeef,
  },
  {
    id: "p2",
    name: "Italian Pizza No2",
    discription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    unit: "30*30cm peice",
    price: 45,
    currency: "€",
    pic: mexic,
  },
  {
    id: "p3",
    name: "Italian Pizza No3",
    discription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    unit: "30*30cm peice",
    price: 41,
    currency: "€",
    pic: chicken,
  },
  {
    id: "p4",
    name: "Italian Pizza No4",
    discription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    unit: "30*30cm peice",
    price: 44,
    currency: "€",
    pic: beiken,
  },
  {
    id: "p5",
    name: "Italian Pizza No5",
    discription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    unit: "30*30cm peice",
    price: 43,
    currency: "€",
    pic: peperoni,
  },
  {
    id: "p6",
    name: "Italian Pizza No6",
    discription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    unit: "30*30cm peice",
    price: 45,
    currency: "€",
    pic: choritso,
  },
  {
    id: "p7",
    name: "Italian Pizza No7",
    discription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    unit: "30*30cm peice",
    price: 39,
    currency: "€",
    pic: vegetable,
  },
  {
    id: "p8",
    name: "Italian Pizza No8",
    discription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    unit: "30*30cm peice",
    price: 29,
    currency: "€",
    pic: margarita,
  },
];

const FoodMenu = (props) => {

  return (
    <>
      <div className={`${styles.FoodMenu} mt-5 `} >
        <p className="mt-5 text-center fw-bold">Italian Pizza</p>
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
