import "./deliveryTime.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const DeliveryTime = () => {
  return (
    <div className="DeliveryTime bg-white mt-5 d-flex align-items-center justify-content-around">
      <FontAwesomeIcon className="clock me-3" icon={faClock} />
      <p>دریافت در سریع‌ترین زمان ممکن</p>
      <FontAwesomeIcon className="chevron me-3" icon={faChevronDown} />
    </div>
  );
};

export default DeliveryTime;
