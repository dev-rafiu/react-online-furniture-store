import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { CLEAR_CART, REMOVE_FROM_CART } from "../actions";
import CartItem from "./CartItem";

function Cart({ cart = [], dispatch, remove }) {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const { price } = item.fields;
      total += (price / 100) * item.count;
      return parseFloat(total.toFixed(2));
    }, 0);
  };

  return (
    <section className="cart-section">
      <div className="section-center">
        {cart.length === 0 ? (
          <p className="empty-cart-text">Empty Cart</p>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}

        <div className="total-info flex">
          <p>Total</p>
          {/* <p>GH¢ {calculateTotalPrice()}</p> */}
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
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Cart);
