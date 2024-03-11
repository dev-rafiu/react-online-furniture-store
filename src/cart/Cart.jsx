import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { CLEAR_CART, GET_TOTALS } from "../actions";
import CartItem from "./CartItem";
import { useEffect } from "react";

function Cart({ cart = [], dispatch, totalPrice }) {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  });

  return (
    <section className="cart-section">
      <div className="section-center">
        {cart.length === 0 ? (
          <p className="empty-cart-text">Empty Cart</p>
        ) : (
          cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        )}

        <div className="total-info flex">
          <p>Total</p>
          <p>GH¢ {totalPrice.toFixed(2)}</p>
        </div>

        <button
          onClick={() => dispatch({ type: CLEAR_CART })}
          className="clear-btn"
        >
          Clear cart
        </button>

        <Link to="/" className="home-link">
          Back to home
        </Link>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return { cart: state.cart, totalPrice: state.totalPrice };
}

export default connect(mapStateToProps)(Cart);
