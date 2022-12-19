import { useReducer } from "react";

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

  const OrderContext2 = {
    items: [],
    totalAmount: 0,
    // addItem: addItemToCardHandler,
    // removeItem: removeItemFromCardHandler,
  };
  return (
    <OrderContext.Provider value={OrderContext2}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
