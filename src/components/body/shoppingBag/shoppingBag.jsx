import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import './shoppingBag.scss'

const ShoppingBag = () => {
  return (
    <div className="shoppingBag mt-5 d-flex flex-column justify-content-center align-items-center">
      <FontAwesomeIcon className="basket me-3 mt-3" icon={faBasketShopping} />
      <p className="mt-3">سبد خرید شما خالی است!</p>
    </div>
  );
};

export default ShoppingBag;
