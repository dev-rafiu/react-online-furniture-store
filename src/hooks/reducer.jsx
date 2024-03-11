import {
  ADD_TO_CART,
  CLEAR_CART,
  GET_TOTALS,
  HANDLE_QUANTITY,
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
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        if (action.payload.type === "inc") {
          cartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          cartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
        }
      }

      return cartItem;
    });

    return { ...state, cart: newCart };
  }

  if (action.type === GET_TOTALS) {
    const { totalPrice } = state.cart.reduce(
      (total, item) => {
        const { price } = item.fields;
        total.totalPrice += (price / 100) * item.quantity;
        return total;
      },

      { totalPrice: 0 }
    );

    return { ...state, totalPrice };
  }

  if (type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  return state;
};
