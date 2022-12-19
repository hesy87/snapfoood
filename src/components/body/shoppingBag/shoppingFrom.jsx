import { useRef } from "react";
import style from "./shoppingForm.module.scss";

const ShoppingForm = (props) => {
  
  const submitHandler = (event) => {
    event.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enterdAmount;
    props.onAddToShoppingBag(enteredAmountNumber)
  };

  const amountInputRef = useRef();

  return (
    <>
      <form className={style.ShoppingForm} onSubmit={submitHandler}>
        <input ref={amountInputRef} />
        <button>افزودن</button>
      </form>
    </>
  );
};

export default ShoppingForm;
