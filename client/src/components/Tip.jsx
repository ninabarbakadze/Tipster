import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import Spinner from './Spinner';

const Tip = ({ user, setUser, tip, setTip }) => {
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    artistById();
  }, []);

  const artistById = () => {
    fetch(`http://localhost:4000/tip/${id}`, {
      method: 'Get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(user => user.json())
      .then(user => setUser(user));
  };

  const clickHandler = () => {
    history.push('/message');
  };

  return (
    <div>
      {user ? <div className='tipping-container'>
        <h1>TIPSTER</h1>
        <img src={user.photo} alt='img' />
        <p id='name'>{user.name}</p>
        <div className='button-parent'>
          <button className='btn' onClick={() => setTip(5)}><span className='tip-span'>$2</span></button>
          <button className='btn' onClick={() => setTip(5)}><span className='tip-span'>$5</span></button>
          <button className='btn' onClick={() => setTip(10)}><span className='tip-span'>$10</span></button>
        </div>
        <input type="text" placeholder="Custom amount" onChange={(e) => setTip(e.target.value)}></input>

        <button onClick={() => clickHandler()} className='tip-button'><span className='cintinue'>Continue </span></button>
      </div> : <Spinner />}
    </div>
  );
};

export default Tip;
