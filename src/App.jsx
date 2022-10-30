import React, { useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

import Test from "./Components/UI/Test";

// import CartProvider from "./context/CartProvider";

import { CartProvider } from "./context/CartContext";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const carteBtnClick = () => {
    setCartIsShown(true);
  };

  const closeModal = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart closeModal={closeModal} />}
      <Header carteBtnClick={carteBtnClick} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
