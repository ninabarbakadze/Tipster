import React from 'react';
import StripeButton from './StripeButton';
import Spinner from './Spinner';

const StripeConnect = ({ user }) => {

  return (
    <div className='stripe-connect'>
      {user ?
        <div>
          <h1>TIPSTER</h1>
          <img src={user.photo} alt='img' />
          <p className='user-name'>{user.name}</p>
          <StripeButton user={user}></StripeButton>
        </div>
        : <Spinner />}
    </div>
  );
};

export default StripeConnect;
