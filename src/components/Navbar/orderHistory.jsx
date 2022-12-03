import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import './orderHistory.scss'

const OrderHistory = () => {
  return (
    <div className='OrderHistory d-flex justify-content-center'>
      <FontAwesomeIcon className="fs-5" icon={faRectangleList} />
      <h6 className="me-3">سفارش ها</h6>
    </div>
  );
};

export default OrderHistory;
