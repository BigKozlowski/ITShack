import React from "react";
import { connect } from "react-redux";

import { addItemToCart, clearItemFromCart, removeItem } from "../../redux/cart/cart.acrions";
import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButton } from "./checkout-item.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        {" "}
        &#10005;{" "}
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch: (action: { type: string; payload: item }) => any) => ({
  clearItemFromCart: (item: item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item: item) => dispatch(addItemToCart(item)),
  removeItem: (item: item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
