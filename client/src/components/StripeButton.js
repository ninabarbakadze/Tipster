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
          // browserHistory.push("/path-to-link");
        } else {
          // elmButton.removeAttribute("disabled");
          // elmButton.textContent = "<Something went wrong>";
          // console.log("data", data);
        }
      }).catch(err => {
        console.error(err);
      });
  }

  return (
    <div>
      <p>Set up your Stripe account to start receiving tips</p>
      <button onClick={() => handleClick()}>Set up Payouts on Stripe</button>
    </div>
  );
}