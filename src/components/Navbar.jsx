import { Link } from "react-router-dom";

import { connect } from "react-redux";

function Navbar({ cart }) {
  return (
    <nav className="navbar">
      <div className="section-center flex">
        <Link to="/" className="site-name">
          Store
        </Link>

        <div className="cart-area">
          <Link to="/cart" className="cart-link">
            <span className="sr-only">Cart</span>
            <i className="fa-solid fa-cart-shopping" />
          </Link>
          <span className="items-count">{cart.length}</span>
        </div>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Navbar);
