import "./body.scss";
import BreadCrumb from "./breadcrumb/breadcrumb";
import MenuBar from "./menuBar/menuBar";
import FoodMenu from "./foodMenu/foodMenu";
import ReasturantIntroduction from "./resturantIntroduction/reasturantIntroduction";
import ShoppingBag from './shoppingBag/shoppingBag';
import DeliveryTime from './deliveryTime/deliveryTime';
import CourierPrice from './courier/courierPrice';

const Body = () => {
  return (
    <>
      <BreadCrumb />
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <ReasturantIntroduction />
            <MenuBar />
          </div>
          <div className="col-6">
            <FoodMenu />
          </div>
          <div className="col-3">
            <DeliveryTime />
            <CourierPrice/>
            <ShoppingBag/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
