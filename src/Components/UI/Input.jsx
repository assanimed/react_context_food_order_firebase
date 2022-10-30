import React, { forwardRef } from "react";

import styles from "./Input.module.css";

const Input = forwardRef(
  ({ label, type, id, value, changeHandler, name, min, max }, ref) => {
    return (
      <div className={styles.input}>
        <label htmlFor={id}> {label} </label>{" "}
        <input
          ref={ref}
          type={type}
          id={id}
          value={value}
          onChange={changeHandler}
          name={name}
          min={min}
          max={max}
        />
      </div>
    );
  }
);

export default Input;
