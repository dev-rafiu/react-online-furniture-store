import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function Navbar() {
  const { cart } = useContext(AppContext);

  return (
    <nav className="navbar">
      <div className="section-center flex">
        <Link to="/" className="site-name">
          Store
        </Link>

        <div className="cart-area">
          <Link to="/cart" className="cart-link">
            <span className="sr-only">Cart</span>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <span className="items-count">{cart.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
