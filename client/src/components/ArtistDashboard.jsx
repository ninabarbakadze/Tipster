import React from 'react';
import TipDashboard from './TipDashboard';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const ArtistDashboard = ({ logOut, user, tips, setTips }) => {

  return (
    <div>
      {user ? <div className='container'>
        <div className='header'>
          <h1>TIPSTER</h1>
          <Link to='/' >
            <button onClick={() => logOut()}><span>Sign out</span></button>
          </Link>
        </div>
        <div>
          <img className='photo-artist' src={user.photo} alt='img' />
          <img className='photo-qr' src={user.qrcode} alt='img' />
        </div>
        <p className='artist-name'>{user.name}</p>
        <TipDashboard user={user} tips={tips} setTips={setTips}></TipDashboard>
      </div> : <Spinner />}
    </div>
  );
};

export default ArtistDashboard;
