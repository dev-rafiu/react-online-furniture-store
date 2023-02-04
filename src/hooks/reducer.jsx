export const reducer = (state, action) => {
  const type = action.type;

  if (type === "DATA_FETCHED") {
    return { ...state, isLoading: false };
  }

  if (type === "ADD_TO_CART") {
    const index = state.cart.findIndex((item) => item.id === action.payLoad.id);
    if (index >= 0) {
      return { ...state };
    }
    return {
      ...state,
      cart: [...state.cart, action.payLoad],
    };
  }

  if (type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((item) => {
        return item.id !== action.payLoad;
      }),
    };
  }

  if (type === "INCREASE_COUNT") {
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payLoad) {
        return { ...cartItem, count: cartItem.count + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: newCart };
  }

  if (type === "DECREASE_COUNT") {
    const newCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payLoad) {
          return { ...cartItem, count: cartItem.count - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => {
        return cartItem.count > 0;
      });

    return { ...state, cart: newCart };
  }

  if (type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  throw Error("Unknown action: " + type);
};
