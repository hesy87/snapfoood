import styles from "./foodCard.module.scss";
import ShoppingButton from "../shoppingBag/shoppingButton";

const FoodCard = (props) => {

  return (
    <>
      {props.italianPizza.map((item) => (
        <div key={item.id} className={`${styles.foodCard} p-0 col`}>
          <div className="d-flex py-3 ps-2">
            <div className="d-flex flex-column me-1 col-7">
              <span className={`${styles.foodTitle} mb-2`}>{item.name}</span>
              <span className={styles.foodDiscription}>{item.discription}</span>
            </div>
            <div className="col-5 pe-2">
              <img className="img-fluid" src={item.pic} alt="foodPic" />
            </div>
          </div>
          <div
            className={`${styles.addToCard} pt-2 pb-4 d-flex justify-content-between`}
          >
            <div className="ps-2 d-flex flex-column">
              <span>{item.unit}</span>
              <span>{`${item.price} ${item.currency}`}</span>
            </div>
            <div className="me-2">
              <ShoppingButton
                items={item}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FoodCard;
