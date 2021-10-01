import React from 'react';
import moment from 'moment';
export default function Event({tip}) {
  return <div className='tip'>
    <div className='name-amount'> 
      <p>{tip.name}</p>
      <p className='amount'>+ ${tip.amount}.00</p>
    </div>
    <div className='message-time'>
      <p>{JSON.stringify(tip.message)}</p>
      <p className='time'>{moment(tip.createdAt).startOf('hour').fromNow()}</p>
    </div>
  </div>

}