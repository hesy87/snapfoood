import React,{useState} from "react";
import "./body.scss";
import BreadCrumb from "./breadcrumb/breadcrumb";
import MenuBar from "./menuBar/menuBar";
import FoodMenu from "./foodMenu/foodMenu";
import ReasturantIntroduction from "./resturantIntroduction/reasturantIntroduction";
import ShoppingBag from "./shoppingBag/shoppingBag";
import DeliveryTime from "./deliveryTime/deliveryTime";
import CourierPrice from "./courier/courierPrice";
import OrderContext from "../../context/selectedFood-context";

const Body = (props) => {
  
  const [data,setData] = useState([])
  const sendData = (item) => {
    setData(item[0].name)
  
  }
  return (
    <OrderContext.Provider value={data}>
      <BreadCrumb />
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <ReasturantIntroduction />
            <MenuBar />
          </div>
          <div className="col-6">
            <FoodMenu onContext={sendData}/>
          </div>
          <div className="col-3">
            <DeliveryTime />
            <CourierPrice />
            <ShoppingBag />
          </div>
        </div>
      </div>
    </OrderContext.Provider>
  );
};

export default Body;
