import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import './orderHistory.scss'

const OrderHistory = () => {
  return (
    <div className='OrderHistory d-flex justify-content-center'>
      <h6 className="me-3 fs-5">Orders</h6>
      <FontAwesomeIcon className="fs-5" icon={faRectangleList} />
    </div>
  );
};

export default OrderHistory;
