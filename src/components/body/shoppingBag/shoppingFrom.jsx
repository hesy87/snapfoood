import { useRef, useState } from "react";
import style from "./shoppingForm.module.scss";

const ShoppingForm = (props) => {
  const [amountIsValid, setamountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enterdAmount;

    if (
      enterdAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setamountIsValid(false);
      return;
    }

    props.onAddToShoppingBag(enteredAmountNumber)
  };

  const amountInputRef = useRef();

  return (
    <>
      <form className={style.ShoppingForm} onSubmit={submitHandler}>
        <input ref={amountInputRef} type="number" min="0" max="5" />
        <button>افزودن</button>
        {!amountIsValid && <p>عدد وارد شده درست نمی باشد</p>}
      </form>
    </>
  );
};

export default ShoppingForm;
