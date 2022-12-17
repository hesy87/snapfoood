import React, {createContext} from "react";

  
const OrderContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem: (item) => {},
    removeItem: (item) => {}
});

export default OrderContext;

// import OrderContext from "../../../context/selectedFood-context";
// OrderContext.Provider value={OrderState}
// OrderContext.Provider


// const ctx = useContext(OrderContext);
// import OrderContext from "../../../context/selectedFood-context";
// import { useContext } from "react";