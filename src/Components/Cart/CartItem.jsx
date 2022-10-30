import classes from "./CartItem.module.css";
import { useContext } from "react";

import CartContext from "../../context/CartContext";

const CartItem = ({ price, amount, name, id }) => {
  const priceFormat = `$${price.toFixed(2)}`;

  const { addItem, removeItem } = useContext(CartContext);

  const item = { id, price, amount: 1 };
  const onAdd = () => {
    addItem(item);
  };

  const onRemove = () => {
    removeItem(item);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceFormat}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd} disabled={amount < 5 ? false : true}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
