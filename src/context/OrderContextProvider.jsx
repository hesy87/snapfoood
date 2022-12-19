import { useReducer, useState } from "react";

import OrderContext from "./selectedFood-context";

// const defaultOrderState = {
//   items: [],
//   totalAmount: 0,
// };

// const OrderReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updatedItem = state.items.concat(action.item);
//     const newTotalAmount =
//       state.totalAmount + action.item.price * action.item.amount;
//     return {
//       items: updatedItem,
//       totalAmount: newTotalAmount,
//     };
//   }
//   return defaultOrderState;
// };

const OrderProvider = (props) => {
  // const [OrderState, setOrderState] = useReducer(
  //   OrderReducer,
  //   defaultOrderState
  // );

  // const addItemToCardHandler = (item) => {
  //   setOrderState({
  //     type: "ADD",
  //     item: item,
  //   });
  // };
  // const removeItemFromCardHandler = (id) => {
  //   setOrderState({
  //     type: "REMOVE",
  //     id: id,
  //   });
  // };
  const [items, setItems] = useState({});
  const [OrderState,setOrderState] = useState({OrderAmount:0 , FoodName:'',FoodPrice:0})

  const onPlusHandler = (Name, price) => {
    setOrderState({
      OrderAmount: Number(OrderState.OrderAmount) + 1,
      FoodName: Name,
      FoodPrice: Number(price),
    });
  };
  // const OrderContext2 = {
  //   items: {},
  //   OrderAmount: 0,
  //   // addItem: addItemToCardHandler,
  //   // removeItem: removeItemFromCardHandler,
  // };
  return (
    <OrderContext.Provider value={{ items, setItems,onPlusHandler,OrderState }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
