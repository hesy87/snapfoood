import "./courier.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const CourierPrice = () => {
  return (
    <div className="CourierPrice py-3 mt-3 d-flex justify-content-around">
      <FontAwesomeIcon className="truck" icon={faTruck} />
      <span className="courierOption">پیک فروشنده</span>
      <span className="courierPrice">رایگان</span>
    </div>
  );
};

export default CourierPrice;
