import { connect } from "react-redux";

import { ADD_TO_CART } from "../actions";

function Product({ item, addToCart }) {
  const { image, name, price } = item.fields;
  const URL = image[0].url;

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

        <button onClick={() => addToCart()} className="add-btn">
          <i className="fa-solid fa-cart-shopping" />
          Add To Cart
        </button>
      </div>
    </article>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  const { item } = ownProps;

  return {
    addToCart: () => dispatch({ type: ADD_TO_CART, payload: { item } }),
  };
}

export default connect(null, mapDispatchToProps)(Product);
