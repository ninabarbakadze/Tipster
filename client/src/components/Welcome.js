import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {


  return (
    <div className="App">
      <h1>Get tipped by fans</h1>
      <Link to='/register'>
        <button>Get started</button>
      </Link>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
  );
}
