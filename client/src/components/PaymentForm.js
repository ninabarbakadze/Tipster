import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import PaymentSuccessful from './PaymentSuccessfull';
import axios from 'axios';





const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      border: "none",
      iconColor: "#76FA76",
      color: "#FFF",
      fontWeight: 500,
      fontFamily: "SF Compact Display, Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "20px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#76FA76" },
      "::placeholder": { color: "rgba(255, 255, 255, 0.6)" }
    },
    invalid: {
      iconColor: "#76FA76",
      color: "#76FA76"
    }
  }
}

export default function PaymentForm({ tip, user}) {
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
    
    <div >
    {!success ?  <>
      <h1 className='form-header'>TIPSTER</h1>
       <p className='form-amount'>Tipping ${tip} to: </p>
       <img className='form-img' src={user.photo} alt='img'/>
      <p className='form-name'>{user.name}</p>
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className='card-container'>
            <CardElement className='stripe-card' options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button type="submit" className='tip-button'><span className='cintinue'>Tip ${tip}</span></button>
        </form>  
        </>
        :
        (<div>
          <PaymentSuccessful tip={tip} user={user} />
        </div> ) }
    </div>
  )
}