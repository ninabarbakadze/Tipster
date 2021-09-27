import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import StripeContainer from '../components/StripeContainer'

export default function Tip({ user, setUser, tip, setTip }) {
  const history = useHistory();
  const [message, setMessage] = useState('')
  let { id } = useParams();

  useEffect(() => {
    artistById()
  }, [])

  function createTip() {
    fetch(`http://localhost:4000/tip`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tip, message, user.id)
    })
      .then(user => user.json())
    /*   .then(res => res.json(tip, message, ))
      .then(user => {
        console.log('createUser', user)
        setUser(user)
      }) */
  }

  console.log(tip);
  console.log(message);

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
    createTip();
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
        <input type="text" placeholder="Leave a message" value={message} onChange={(e) => setMessage(e.target.value)}></input>
        <button onClick={() => clickHandler()}>Tip {tip} </button>
      </> : <p>No artist with this id</p>}
    </div>
  )
}