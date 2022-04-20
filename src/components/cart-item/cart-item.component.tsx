import React from "react";

import { CartItemContainer, ItemDetailsContainer, ItemNameContainer } from "./cart-item.styles";

const CartItem = ({ item }: { item: cartItem }) => {
  return (
    <CartItemContainer>
      <img src={item.imageUrl} alt="item" />
      <ItemDetailsContainer>
        <ItemNameContainer>{item.name}</ItemNameContainer>
        <span className="price">
          {item.quantity} x ${item.price} = ${item.totalAmount}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
