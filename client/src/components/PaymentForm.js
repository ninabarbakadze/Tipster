import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';





const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
}

export default function PaymentForm({ tip, user }) {
  // console.log(tip)
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();


  console.log(tip);
  console.log('coming from paymentForm', user);
  const handleSubmit = async (e) => {
    e.preventDefault()

    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    console.log('payment form gets strip id', user.stripeId)

    if (!error) {
        const { id } = paymentMethod
        fetch(`http://localhost:4000/payment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({amount: tip * 100,
            id,
            artistId: user.stripeId})
          })
          .then(res => res.json())
          .then(res => {
            console.log(res)
            if(res.success) setSuccess(true);
          }).catch(error => console.log(error))
    }
  }

  console.log('paymentform tip', tip)

  return (
    <div>
      {!success ?
        <form onSubmit={handleSubmit}>
          <p>You are tipping {tip.tip}  euros</p>
          <fieldset className="FormGroup">
            <CardElement options={CARD_OPTIONS} />
          </fieldset>
          <button type="submit">Pay</button>
        </form>
        :
        <div>
          <h2>Payment successful</h2>
        </div>
      }
    </div>
  )
}