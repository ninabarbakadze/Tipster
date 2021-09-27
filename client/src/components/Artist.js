import '../App.css';
import React, { useEffect } from 'react';
import StripeButton from './StripeButton';

export default function Artist({ user, setUser }) {
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

    <div className="Artist-dashboard">
      <h1>TIPSTER</h1>
      {user ? <>
        <img className='artist-photo' src={user.photo} alt='artist' />
        <p className='artist-name'>{user.name}</p>
        <p className='start'>To start receiving tips, share or print your QR code.</p>
        <img className='qr' src={user.qrcode} alt='qrcode' />
        <StripeButton user={user}></StripeButton>
        <button >Share</button>
        <button>Print</button>
      </> : <p>user loading</p>}

    </div >
  );
}
