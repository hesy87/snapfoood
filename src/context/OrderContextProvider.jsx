import OrderContext from "./selectedFood-context";

const OrderProvider = (props) => {
    const addItemToCardHandler = item => {}
    const removeItemFromCardHandler = id => {}

  const OrderContext2 = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler,
  };
  return <OrderContext.Provider value={OrderContext2}>{props.children}</OrderContext.Provider>;
}

export default OrderProvider;
