import React, { useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { reducer } from "./hooks/reducer";

// components
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

// pages
import PageNotFound from "./pages/PageNotFound";
import Cart from "./cart/Cart";

export const AppContext = React.createContext(null);

const initialStore = {
  cart: [],
  total: 0,
};

function App() {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialStore);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://course-api.com/javascript-store-products"
      );
      const data = await response.json();
      data.forEach((item) => {
        item.inCart = false;
        item.count = 1;
      });
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        increaseCount,
        decreaseCount,
        clearCart,
        removeCartItem,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage data={data} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
