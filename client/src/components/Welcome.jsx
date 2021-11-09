import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {

  return (
    <div className="welcome">
      <h1>TIPSTER</h1>
      <h2>Get tipped by fans.</h2>
      <Link to='/register'>
        <button><span>Get started</span></button>
      </Link>
      <Link to='/login'>
        <button><span>Login</span></button>
      </Link>
    </div>
  );
};

export default Welcome;
