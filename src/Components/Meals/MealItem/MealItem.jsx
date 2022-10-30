import React, { useContext } from "react";

import MealItemFrom from "./MealItemFrom";

import styles from "./MeaIItem.module.css";

import CartContext from "../../../context/CartContext";

function ListItem({ id, name, desc, price }) {
  const { addItem } = useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    const product = {
      id,
      name,
      price,
      amount,
    };

    addItem(product);
  };
  return (
    <li className={styles.item}>
      <div className="info">
        <h4>{name}</h4>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <div className="config">
        <MealItemFrom onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
}

export default ListItem;
