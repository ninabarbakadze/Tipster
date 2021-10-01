import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import StripeContainer from '../components/StripeContainer'
import Spinner from './Spinner';

export default function Tip({ user, setUser, tip, setTip }) {
  const history = useHistory();

  let { id } = useParams();

  useEffect(() => {
    artistById()
  }, [])

 



  function artistById() {
    fetch(`http://localhost:4000/tip/${id}`, {
      method: 'Get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(user => user.json())
      .then(user => setUser(user))
  }


  function clickHandler() {
    history.push('/message')
  }

  function handleClick (event) {
    event.target.style.backgroundColor = "red"
  }



  return (
    <div>
      {user ? <div className='tipping-container'>
        <h1>TIPSTER</h1>
        <img src={user.photo} alt='img' />
        <p id='name'>{user.name}</p>
        <div className='button-parent'>
          <button className='btn' onClick={() => setTip(5)}><span className='tip-span'>$2</span></button>
          <button className='btn'  onClick={() => setTip(5)}><span className='tip-span'>$5</span></button>
          <button className='btn'  onClick={() => setTip(10)}><span className='tip-span'>$10</span></button>
        </div>
        <input type="text" placeholder="Custom amount" /* value={tip ? '$' + tip + '.00' : tip} */ onChange={(e) => setTip(e.target.value)}></input>
    
        <button onClick={() => clickHandler()} className='tip-button'><span className='cintinue'>Continue </span></button>
      </div> : <Spinner />}
    </div>
  )
}