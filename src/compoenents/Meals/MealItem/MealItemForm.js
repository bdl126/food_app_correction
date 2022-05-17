import { useRef, useState } from "react"

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";


const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const SubmitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // console.log(enteredAmount);
    const enteredAmountNumber = +enteredAmount
    if (enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount> 5) {
      setAmountIsValid(false)
      return
    }
    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
      ref={amountInputRef}
      label="Amount" input={{
          id: 'amount_' + props.id,
          type:'number',
          min:"1",
          max:"5",
          step: "1",
          defaultValue: "1"

      }}></Input>
      <button>+ add</button>
      {!setAmountIsValid && <p>Please enter a value between 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
