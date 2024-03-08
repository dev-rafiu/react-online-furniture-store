import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_COUNT,
  HANDLE_QUANTITY,
  INCREASE_COUNT,
  REMOVE_FROM_CART,
} from "../actions";

export const reducer = (state, action) => {
  const { type } = action;

  if (type === ADD_TO_CART) {
    const { item } = action.payload;
    const index = state.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) return { ...state };

    return {
      ...state,
      cart: [...state.cart, item],
    };
  }

  if (type === REMOVE_FROM_CART) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id != action.payload.id),
    };
  }

  if (type === HANDLE_QUANTITY) {
    console.log("quantity");
  }

  if (type === INCREASE_COUNT) {
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payLoad) {
        cartItem = { ...cartItem, count: cartItem.count + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: newCart };
  }

  if (type === DECREASE_COUNT) {
    const newCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payLoad) {
          cartItem = { ...cartItem, count: cartItem.count - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => {
        return cartItem.count > 0;
      });

    return { ...state, cart: newCart };
  }

  if (type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  return state;
};
