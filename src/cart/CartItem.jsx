import React from "react";
import { connect } from "react-redux";
import { REMOVE_FROM_CART } from "../actions";

function CartItem({ item, remove }) {
  return (
    <li className="product flex">
      <div className="product-details flex">
        <img src={item.fields.image[0].url} alt={item.fields.name} />
        <div className="info">
          <p className="product__name">{item.fields.name}</p>
          <h5 className="product__price">GH¢ {item.fields.price / 100}</h5>
          <button onClick={() => remove()} className="remove-btn">
            remove
          </button>
        </div>
      </div>

      <div className="item-count flex">
        <button onClick={() => {}} className="increase-count">
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="count">{item.count}</div>
        <button onClick={() => {}} className="decrease-count">
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  const { id } = ownProps.item;

  return {
    remove: () => dispatch({ type: REMOVE_FROM_CART, payload: { id } }),
  };
}

export default connect(null, mapDispatchToProps)(CartItem);
