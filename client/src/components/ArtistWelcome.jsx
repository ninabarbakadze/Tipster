import '../App.css';
import React, { useEffect } from 'react';
import Spinner from './Spinner';

 const ArtistWelcome = ({ user, setUser }) => {

  return 
      <div className="artist-dashboard">
      {user ? <>
        <h1>TIPSTER</h1>
        <img className="artist-photo" src={user.photo} alt="artist' />
        <p className="artist-name">{user.name}</p>
        <p className="start">To start receiving tips, <br></br> share or print your QR code.</p>
        <img className="qr" src={user.qrcode} alt="qrcode" />
        <button className="share"><span>Share  􀈂</span></button>
        <button className="print"><span>Print  􀎚</span></button>
      </> : <Spinner />}
    </div >
  );
}
 
export default ArtistWelcome;
