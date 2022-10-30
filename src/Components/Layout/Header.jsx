import CartButton from "./CartButton";

import meals from "../../assets/meals.jpg";
import styles from "./Header.module.css";

function Header({ carteBtnClick }) {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <CartButton cartClick={carteBtnClick}>Your Cart</CartButton>
      </header>
      <div className={`${styles.mainImage}`}>
        <img src={meals} alt="Meals Table" />
      </div>
    </>
  );
}

export default Header;
