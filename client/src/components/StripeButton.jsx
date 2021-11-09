import React from 'react';

const StripeButton = ({ user }) => {

  const stripeSignUp = () => {
    fetch('http://localhost:4000/onboard-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        if (data.url) {
          window.location = data.url;
        }
      }).catch(err => {
        console.error(err);
      });
  };

  return (
    <div className='stripe-button'>
      <p>First, set up your payment method to receive tips.</p>
      <button onClick={() => stripeSignUp()}><span>Let's go</span></button>
    </div>
  );
};

export default StripeButton;
