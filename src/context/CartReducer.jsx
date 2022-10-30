const CartReducer = (state, action) => {
  const { type, payload } = action;

  if (type === "ADD_ITEM") {
    return {
      ...state,
      items: [...state.items, payload],
      totalAmount: state.totalAmount + payload.price * payload.amount,
      total: state.total + payload.amount,
    };
  }

  if (type === "EMPTY_CART") {
    return {
      ...state,
      items: [],
      totalAmount: 0,
      total: 0,
    };
  }

  if (type === "UPDATE_ITEM") {
    const item = action.payload;
    const { items } = state;

    const newItems = items.map((el) => {
      if (el.id === item.id)
        return Object.assign({}, el, { amount: el.amount + item.amount });
      return el;
    });

    return {
      ...state,
      items: newItems,
      totalAmount: state.totalAmount + item.price * item.amount,
      total: state.total + item.amount,
    };
  }

  if (type === "REMOVE_ITEM") {
    const nState = {
      ...state,
      items: state.items.filter((item) => item.id !== payload.id),
      totalAmount: state.totalAmount - payload.price,
      total: state.total - payload.amount,
    };

    return nState;
  }

  if (type === "DECREASE_AMOUNT") {
    const item = action.payload;

    const nState = {
      ...state,
      items: state.items.map((el) => {
        if (el.id === item.id) return { ...el, amount: el.amount - 1 };
        return el;
      }),
      totalAmount: state.totalAmount - item.price,
      total: state.total - 1,
    };

    return nState;
  }

  return state;
};

export default CartReducer;
