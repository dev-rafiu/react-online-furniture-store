import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function Product({ item }) {
  const { addToCart } = useContext(AppContext);

  const { image, name, price } = item.fields;
  const URL = image[0].url;

  function setInCart() {
    addToCart(item);
  }

  return (
    <article className="product">
      <div className="product-img-container">
        <img src={URL} alt={name} className="product__img" />
      </div>
      <div className="details">
        <div className="info flex">
          <p className="product__name">{name}</p>
          <h5 className="product__price">GH¢ {price / 100}</h5>
        </div>
        <button className="add-btn" onClick={setInCart}>
          <i className="fa-solid fa-cart-shopping"></i>
          {/* <span> {isClicked ? "In Cart" : "Add To Cart"}</span> */}
          Add To Cart
        </button>
      </div>
    </article>
  );
}

export default Product;
