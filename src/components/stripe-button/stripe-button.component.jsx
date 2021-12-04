import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51K2rvHSDmW7eja9qmmOAUcfptINukKYo4lw8LBCItJVCQYJVQN577et9onXgWBE72UyvFHsd9Pe7WF9gIvLmGCGq00aD8cnaow";

  const onToken = (token) => console.log(token);
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing .Ltd"
      billingAddress
      shippingAddress
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="USD"
    />
  );
};

export default StripeCheckoutButton;
