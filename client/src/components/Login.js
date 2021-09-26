import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App';

export default function Login({ user, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email })
  }

  function login(user) {
    console.log(user);
    fetch(`http://localhost:4000/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(user => {
        setUser(user)
        history.push('/artist')
      })
  }

  console.log('user', user)

  return (
    <div className='Login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
