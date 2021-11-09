import '../App.css';
import React, { useState, useEffect } from 'react';
import ImageUpload from './ImageUpload';
import { useHistory } from 'react-router-dom';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

const Register = ({ user, setUser, ...props }) => {
  const [file, setFile] = useState();
  const [url, setUrl] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUpload = () => {
    console.log('handleupload fired');
    const storageRef = ref(storage, `/images/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      setUrl(`https://firebasestorage.googleapis.com/v0/b/tipster-3d872.appspot.com/o/${snapshot.ref._location.path_.replace(/\//, '%2F')}?alt=media`);
    });
  };

  const handleSubmit = (e) => {
    console.log('handlesubmit fired');
    e.preventDefault();
    handleUpload();
  };

  useEffect(() => {
    if (url && name && email && password) {
      createUser({ name, email, password, photo: url });
    }
  }, [url]);

  const createUser = (user) => {
    console.log(user);
    fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(user => {
        console.log('createUser', user);
        setUser(user);
        history.push('/connect-to-stripe');
      });
  };

  return (
    <div className="register">
      <h1>CREATE AN ACCOUNT</h1>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <ImageUpload setFile={setFile} />
          <div className='registration-input'>
            <input type="text" placeholder="Artist name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit" className='register-button'><span>Register</span></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
