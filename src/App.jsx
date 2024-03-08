import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import { reducer } from "./hooks/reducer";

import { Provider } from "react-redux";
import { createStore } from "redux";

// components
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

// pages
import PageNotFound from "./pages/PageNotFound";
import Cart from "./cart/Cart";

const initialStore = {
  cart: [],
  totalPrice: 0,
  totalCartItems: 0,
};

export const store = createStore(reducer, initialStore);

function App() {
  const [state, dispatch] = useReducer(reducer, initialStore);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payLoad: product });
  };

  const removeCartItem = (productID) => {
    dispatch({ type: "REMOVE_FROM_CART", payLoad: productID });
  };

  const increaseCount = (productID) => {
    dispatch({ type: "INCREASE_COUNT", payLoad: productID });
  };

  const decreaseCount = (productID) => {
    dispatch({ type: "DECREASE_COUNT", payLoad: productID });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
