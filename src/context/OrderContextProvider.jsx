import { useState } from "react";

import OrderContext from "./selectedFood-context";


const OrderProvider = (props) => {

  const [OrderState,SetOnPlusHandler] = useState({OrderAmount:0 , FoodName:'',FoodPrice:0})

  return (
    <OrderContext.Provider value={{OrderState,SetOnPlusHandler }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
