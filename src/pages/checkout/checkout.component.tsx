import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { CheckoutButton, CheckoutHeader, CheckoutPageContainer, HeaderBlock, TestWarningContainer, TotalContainer } from "./checkout.styles";

const CheckoutPage = ({ cartItems, cartTotal }: { cartItems: cartItem[]; cartTotal: number }) => {
  return (
    <CheckoutPageContainer className="checkout-page">
      <CheckoutHeader className="checkout-header">
        <HeaderBlock className="header-block">
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer className="total">
        <span>TOTAL: ${cartTotal}</span>
      </TotalContainer>
      <TestWarningContainer className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </TestWarningContainer>
      <CheckoutButton price={cartTotal} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
