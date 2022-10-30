import { createContext } from "react";
import { useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initState = {
    items: [],
    totalAmount: 0,
    total: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initState);

  const addItemToCart = (item) => {
    const { items } = state;
    const idx = items.findIndex((el) => el.id === item.id);

    const type = idx === -1 ? "ADD_ITEM" : "UPDATE_ITEM";

    dispatch({
      type,
      payload: item,
    });
  };
  const removeItemFromCart = (item) => {
    const { amount: existingAmount } = state.items.find(
      (el) => el.id === item.id
    );

    const type = existingAmount === 1 ? "REMOVE_ITEM" : "DECREASE_AMOUNT";

    dispatch({
      type,
      payload: item,
    });
  };

  const emptyCart = () => {
    dispatch({
      type: "EMPTY_CART",
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
