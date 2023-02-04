import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../App";

function Cart() {
  const { cart, increaseCount, decreaseCount, clearCart, removeCartItem } =
    useContext(AppContext);

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
          <h1 className="empty-cart-text">Empty Cart</h1>
        ) : (
          cart.map((item) => (
            <article key={item.id} className="product flex">
              <div className="product-details flex">
                <img src={item.fields.image[0].url} alt={item.fields.name} />
                <div className="info">
                  <p className="product__name">{item.fields.name}</p>
                  <h5 className="product__price">
                    GH¢ {item.fields.price / 100}
                  </h5>
                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="item-count flex">
                <button
                  onClick={() => increaseCount(item.id)}
                  className="increase-count"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>

                <div className="count">{item.count}</div>

                <button
                  onClick={() => decreaseCount(item.id)}
                  className="decrease-count"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
              </div>
            </article>
          ))
        )}

        <div className="total-info flex">
          <p>Total</p>
          <h4>GH¢ {calculateTotalPrice()}</h4>
        </div>

        <button onClick={clearCart} className="clear-btn">
          Clear Cart
        </button>
        <Link to="/" className="home-link">
          Back Home
        </Link>
      </div>
    </section>
  );
}

export default Cart;
