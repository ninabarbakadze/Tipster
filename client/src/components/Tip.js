import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import StripeContainer from '../components/StripeContainer'

export default function Tip({ user, setUser, tip, setTip }) {
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    artistById()
  })


  function artistById() {
    fetch(`http://localhost:4000/tip/${id}`, {
      method: 'Get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(user => user.json())
      .then(user => setUser(user))
  }
  console.log(user)

  function clickHandler() {
    history.push('/tip')
  }

  return (
    <div>
      {user ? <>
        <h1>Tipster</h1>
        <img src={user.photo} />
        <p>{user.name}</p>
        {/* <img src={user.qrcode} /> */}
        <div className='button-parent'>
          <button onClick={() => setTip(2)}>2€</button>
          <button onClick={() => setTip(5)}>5€</button>
          <button onClick={() => setTip(10)}>10€</button>
        </div>
        <input type="text" placeholder="Custom amount" value={tip} onChange={(e) => setTip(e.target.value)}></input>
        <button onClick={() => clickHandler()}>Tip {tip} </button>
      </> : <p>No artist with this id</p>}
    </div>
  )
}