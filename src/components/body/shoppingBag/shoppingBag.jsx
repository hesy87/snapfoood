import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "./shoppingBag.scss";

const ShoppingBag = () => {
  return (
    <>
      <div className="d-none shoppingBag mt-5 d-flex flex-column justify-content-center align-items-center">
        <FontAwesomeIcon className="basket me-3 mt-3" icon={faBasketShopping} />
        <p className="mt-3">سبد خرید شما خالی است!</p>
      </div>
      <div className="container shoppingBagFull">
        <div className="row">
          <div className="col d-flex justify-content-between">
            <div>
              <span>سبد خرید</span>
              <span className="me-2">(۲)</span>
            </div>
            <button>
              <FontAwesomeIcon className="trash" icon={faTrashCan} />
            </button>
          </div>
        </div>
        <div className="row selectedFood mt-2">
          <div className="col d-flex flex-column">
            <span>پیتزا دونر استیک ۳۰ سانتی متری</span>
            <div className="d-flex justify-content-between mt-3">
              <span>۲۰۲,۰۰۰ تومان</span>
              <div>
                <button>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>۲</span>
                <button>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingBag;
