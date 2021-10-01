import React from 'react';
import Stripe from 'stripe';
import { browserHistory } from "react-router";

export default function StripeButton({ user }) {
  console.log('stripe button', user);

  function handleClick(e) {
    // e.preventDefault()
    stripeSignUp()
  }
  
  function stripeSignUp() {
    fetch("http://localhost:4000/onboard-user", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        if (data.url) {
          window.location = data.url;
        } else {
        }
      }).catch(err => {
        console.error(err);
      });
  }

  return (
    <div className='stripe-button'>
      <p>First, set up your payment method to receive tips.</p>
      <button onClick={() => handleClick()}><span>Let's go</span></button>
    </div>
  );
}