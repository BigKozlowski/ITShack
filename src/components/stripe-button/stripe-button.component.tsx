import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }: { price: number }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KpDovA2BS7T1I0b0fJxabVxlj0cCRvYG8Bid16gCuQIabGScxbSNkRiZNNy9NHvz8iY5pBWTeuIJatzofgffMSk00tCMebGqk";

  const onToken = (token: any) => {
    console.log(token);
    alert("Payment successfull!");
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

export default StripeCheckoutButton;
