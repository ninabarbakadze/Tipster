import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function TipExtension ({tip, user, message, setMessage}) {

  const [name, setName] = useState(''); 
  const history = useHistory();
  function handleClick () {
    createTip()
    history.push('/tip')
  }

  function createTip() {
    fetch(`http://localhost:4000/tip`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount:tip,
        message: message, 
        name: name,
        UserId: user.id})
    })
      .then(user => user.json())
      .catch(error => console.log(error))
  }

  return (
    <div>
      <h1 className='extention-header'>TIPSTER</h1>
      <p className='extention-amount'>Tipping ${tip} to: </p>
      {/* <div className='container-exptention-checkout'> */}
      <img className='extention-img' src={user.photo} alt='img'/>
       <p className='extention-name'>{user.name}</p>
      {/* </div> */}
      <div className='extention-container'>
<input type="text" placeholder="Leave a message" value={message} onChange={(e) => setMessage(e.target.value)}></input>
<input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
        <button className='extention-button' onClick={() => handleClick()}><span className='cintinue'>Continue</span></button>
      </div>
  )
}