import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import styles from "./Cart.module.css";

import CartContext from "../../context/CartContext";

function Cart({ closeModal }) {
  const { items, totalAmount, emptyCart } = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);
  const [doneProcess, setDoneProcess] = useState(false);
  const [processError, setProcessError] = useState(false);
  const [orderId, setOrderID] = useState(null);

  const hadItems = items.length > 0;

  const onOrder = () => {
    if (totalAmount > 0) setCheckout(true);
  };

  const saveOrder = async (body) => {
    const res = await fetch(
      "https://reactroadmap-default-rtdb.europe-west1.firebasedatabase.app/Orders.json",
      {
        method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await res.json();
    setOrderID(data.name);
    setDoneProcess(true);
    console.log(data);
  };

  const ProcessOrder = (info) => {
    const body = {
      userInfo: { ...info },
      products: { ...items },
      totlaAmoutn: totalAmount,
    };

    saveOrder(body)
      .then(() => {
        setCheckout(false);
        setProcessError(false);
        emptyCart();
      })
      .catch(() => {
        setProcessError("an Error has occurred, Please try again");
        setDoneProcess(true);
      });
  };

  return (
    <Modal closeModal={closeModal}>
      {hadItems > 0 ? (
        <ul className={styles["cart-items"]}>
          {items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              id={item.id}
            />
          ))}
        </ul>
      ) : (
        <h4>Cart is Empty</h4>
      )}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$ {totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles[".button--al"]} onClick={closeModal}>
          Close
        </button>
        {hadItems && (
          <button onClick={onOrder} className={styles[".button"]}>
            Order
          </button>
        )}
      </div>
      {processError ? <h3> {processError}</h3> : ""}
      {doneProcess && !processError && (
        <p>
          your order is placed use <b>{orderId}</b> to tracker your order
        </p>
      )}
      {checkout && <Checkout ProcessOrder={ProcessOrder} />}
    </Modal>
  );
}

export default Cart;
