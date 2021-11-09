import React from 'react';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = 'pk_test_51JaGGqHCv9NHRvAH2nJPK70AIZmF2DhJe4Xd1At34BJoIdwipCcKqNkytp5iqr7bCltkxMvUga3O4uUOmxu8brpN00Q0Ex8oDT'

const stripeTestPromise = loadStripe(PUBLIC_KEY);
const StripeContainer =  ({ tip, user }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm tip={tip} user={user} />
    </Elements>
  );
};

export default StripeContainer;
