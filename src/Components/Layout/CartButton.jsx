import { useContext, useEffect, useState } from "react";
import { ImCart } from "react-icons/im";

import styles from "./CartButton.module.css";

import CartContext from "../../context/CartContext";

function CartButton({ children, cartClick }) {
  const [animateBtn, setAnimateBtn] = useState(false);
  const { total, items } = useContext(CartContext);

  const btnClasses = `${styles.button} ${animateBtn ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;

    setAnimateBtn(true);

    const timer = setTimeout(setAnimateBtn, 350, false);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnClasses} onClick={cartClick}>
      <span className={styles.icon}>
        <ImCart />
      </span>
      <span>{children}</span>
      <span className={styles.badge}>{total}</span>
    </button>
  );
}

export default CartButton;
