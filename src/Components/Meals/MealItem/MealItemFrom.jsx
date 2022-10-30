import React, { useState, useRef } from "react";

import styles from "./MealItemFrom.module.css";

import Input from "../../UI/Input";

function MealItemFrom({ onAddToCart }) {
  const [amount, setAmount] = useState(1);
  const [validAmount, setValidAmount] = useState(true);
  const amountInputRef = useRef();
  const handleChange = (e) => {
    setAmount(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value.trim();

    if (!enteredAmount || enteredAmount < 0 || enteredAmount > 5) {
      setValidAmount(false);
      return;
    }

    onAddToCart(enteredAmount);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        type="number"
        id="amount"
        value={amount}
        changeHandler={handleChange}
        name="amount"
        min="1"
        max="5"
      />
      {!validAmount && <span> Please enter Amount (1-6).</span>}
      <div>
        <button type="submit"> +Add </button>{" "}
      </div>
    </form>
  );
}

export default MealItemFrom;
