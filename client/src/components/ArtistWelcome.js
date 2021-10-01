import '../App.css';
import React, { useEffect } from 'react';
import Spinner from './Spinner';


export default function ArtistWelcome({ user, setUser }) {
  console.log(user)

  /* const MobileShare = () => {
    const handleOnClick = () => {
      if (navigator.share) {
        navigator
          .share({
            title: "`${postTitle} | ${siteTitle}`,",
            text: `Check out ${postTitle} on ${siteTitle}`,
            url: document.location.href,
          })
          .then(() => {
            console.log('Successfully shared');
          })
          .catch(error => {
            console.error('Something went wrong sharing the blog', error);
          });
      }
    }; */

  /*   return (
      <div className='share-icon' onClick={handleOnClick}>
        <ShareIcon />
      </div>
    );
  }; */
  // const shareData = {
  //   title: 'MDN',
  //   text: 'Learn web development on MDN!',
  //   url: 'https://developer.mozilla.org'
  // }
  // const clickHandler = async () => {
  //   try {
  //     await navigator.share(shareData)
  //     // resultPara.textContent = 'MDN shared successfully'
  //   } catch (err) {
  //     // resultPara.textContent = 'Error: ' + err
  //     console.log(err)
  //   }
  // }



  return (

    <div className="artist-dashboard">
      {user ? <>
        <h1>TIPSTER</h1>
        <img className='artist-photo' src={user.photo} alt='artist' />
        <p className='artist-name'>{user.name}</p>
        <p className='start'>To start receiving tips, <br></br> share or print your QR code.</p>
        <img className='qr' src={user.qrcode} alt='qrcode' />
        <button className='share'><span>Share  􀈂</span></button>
        <button className='print'><span>Print  􀎚</span></button>
      </> : <Spinner />}

    </div >
  );
}
