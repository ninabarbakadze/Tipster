import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App';

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });
  };

  const login = (user) => {
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(user => {
        setUser(user);
        history.push('/artist');
      });
  };

  return (
    <div className="login">
      <h1>TIPSTER</h1>
      <h2>Log into your account.</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type="submit"><span>Login</span></button>
      </form>
    </div>
  );
};

export default Login;

