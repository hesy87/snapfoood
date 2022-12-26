import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import './orderHistory.scss'
import { useState } from 'react';

const OrderHistory = () => {
  const [ShowModal,SetShowModal] = useState(false)
const ShowModalHandler = () => {
  SetShowModal(!ShowModal)
}
  return (
    <>
    <button className='OrderHistory d-flex justify-content-center' onClick={ShowModalHandler}>
      <h6 className="me-3 fs-5">Orders</h6>
      <FontAwesomeIcon className="fs-5" icon={faRectangleList} />
    </button>
    <div className="modal1">22</div>
    </>
  );
};

export default OrderHistory;
