import React from "react";
import { connect } from "react-redux";

import { addItemToCart, clearItemFromCart, removeItem } from "../../redux/cart/cart.acrions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addItemToCart,
  removeItem,
}: {
  cartItem: cartItem;
  clearItemFromCart: any;
  addItemToCart: any;
  removeItem: any;
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>
        {" "}
        &#10005;{" "}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: (action: { type: string; payload: item }) => any) => ({
  clearItemFromCart: (item: item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item: item) => dispatch(addItemToCart(item)),
  removeItem: (item: item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
