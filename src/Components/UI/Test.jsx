import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

function Test() {
  return (
    <CartContext.Consumer>
      {(ctx) => {
        const handleClick = () => {
          console.log(ctx);
          ctx.addItem({ id: "f", name: "ff", price: 25.4, amount: 5 });
        };
        return <div onClick={handleClick}>Test</div>;
      }}
    </CartContext.Consumer>
  );
}

export default Test;
