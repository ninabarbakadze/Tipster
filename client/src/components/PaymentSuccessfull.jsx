import React from 'react';

 const PaymentSuccessful = ({ tip, user, tips, setTips, message }) => {

  return (
    <div>
      <h1 className='success-header'>TIPSTER</h1>
      <p className='success-amount'>You tipped ${tip} to:</p>
      <img className='success-image' src={user.photo} alt='img' />
      <p className='success-name'>{user.name}</p>
      <button className='success-btn'><span className='end'>Share 􀈂</span></button>
    </div>
  );
};

export default PaymentSuccessful
