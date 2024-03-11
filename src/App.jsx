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
  totalItems: 0,
};

export const store = createStore(reducer, initialStore);

function App() {
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
