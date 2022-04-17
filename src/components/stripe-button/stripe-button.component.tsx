import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../../redux/cart/cart.acrions";

const StripeCheckoutButton = ({ price, clearCart }: { price: number; clearCart: any }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KpDovA2BS7T1I0b0fJxabVxlj0cCRvYG8Bid16gCuQIabGScxbSNkRiZNNy9NHvz8iY5pBWTeuIJatzofgffMSk00tCMebGqk";

  const onToken = (token: any) => {
    console.log(token);
    alert("Payment successfull!");
    clearCart();
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="ITShack"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch: (action: { type: string; payload: any }) => any) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
