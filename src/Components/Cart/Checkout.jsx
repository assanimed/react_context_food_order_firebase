import React, { useState } from "react";
import styles from "./Checkout.module.css";
import useInput from "../../CustomHooks/useInput";

const Checkout = ({ ProcessOrder }) => {
  const {
    value: fullName,
    valueIsValid: fullNameIsValid,
    setValue: setFullName,
    resetInput: resetFullNameInput,
    valueInputIsInValid: fullNameInputIsInValid,
    handleInputChanges: fullNameInputChanges,
    handleInputBlur: fullNameInputBlur,
  } = useInput((val) => val.trim().split(" ").length >= 2);

  const {
    value: email,
    valueIsValid: emailIsValid,
    setValue: setEmail,
    resetInput: resetEmailInput,
    valueInputIsInValid: emailInputIsInValid,
    handleInputChanges: emailInputChanges,
    handleInputBlur: emailInputBlur,
  } = useInput((val) => val.trim().includes("@"));

  const {
    value: address,
    setValue: setAddress,
    valueIsValid: addressIsValid,
    resetInput: resetAddressInput,
    valueInputIsInValid: addressInputIsInValid,
    handleInputChanges: addressInputChanges,
    handleInputBlur: addressInputBlur,
  } = useInput((val) => val.trim().split(" ").length >= 3);

  const resetForm = () => {
    resetFullNameInput();
    resetEmailInput();
    resetAddressInput();
  };

  const formIsValid = fullNameIsValid && emailIsValid && addressIsValid;

  const submitOrder = (e) => {
    e.preventDefault();

    ProcessOrder({ fullName, email, address });

    resetForm();
  };

  return (
    <form className={styles.form} onSubmit={submitOrder}>
      <div className={styles.control}>
        <label htmlFor="fullname" className={styles.label}>
          Full Name
        </label>
        <input
          type="text"
          onChange={fullNameInputChanges}
          onBlur={fullNameInputBlur}
          id="fullname"
          className={styles.input}
          value={fullName}
        />
        {fullNameInputIsInValid && (
          <span className={styles.errorSpan}>
            At least provide your first and last name
          </span>
        )}
      </div>

      <div className={styles.control}>
        <label htmlFor="email" className={styles.label}>
          email
        </label>
        <input
          type="text"
          id="email"
          className={styles.input}
          value={email}
          onChange={emailInputChanges}
          onBlur={emailInputBlur}
        />
        {emailInputIsInValid && (
          <span className={styles.errorSpan}>
            invalid email (ex: live@goal.com)
          </span>
        )}
      </div>

      <div className={styles.control}>
        <label htmlFor="address" className={styles.label}>
          Address
        </label>
        <input
          type="text"
          id="address"
          className={styles.input}
          value={address}
          onChange={addressInputChanges}
          onBlur={addressInputBlur}
        />
        {addressInputIsInValid && (
          <span className={styles.errorSpan}>
            Invalid Address (ex: 189 BLock 7 AV oued sous, Tetouan )
          </span>
        )}
      </div>
      <div>
        <button className={styles.submitButton} disabled={!formIsValid}>
          Complete Order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
