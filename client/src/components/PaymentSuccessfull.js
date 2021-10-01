import React from 'react';

export default function PaymentSuccessful ({tip, user, tips, setTips, message}) {
console.log(message)
return (
 <div>
   <h1 className='success-header'>TIPSTER</h1>
   <p className='success-amount'>You tipped ${tip} to:</p>
   <img className='success-image'src={user.photo} alt='img'/>
   <p className='success-name'>{user.name}</p>
   {/* <p className='success-message'>{JSON.stringify(message)}</p> */}
   <button className='success-btn'><span className='end'>Share 􀈂</span></button>
 </div>
)
}