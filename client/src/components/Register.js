import '../App.css';
import React, { useState, useEffect } from 'react';
import ImageUpload from './ImageUpload';
import { Link, useHistory } from 'react-router-dom';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../firebase';

// import { Route } from 'react-router-dom';

// import { firebaase } from 'firebase';


export default function Register({ user, setUser, ...props }) {
  const [file, setFile] = useState();
  const [url, setUrl] = useState()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();





  function handleUpload() {
    console.log('handleupload fired')
    const storageRef = ref(storage, `/images/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      setUrl(`https://firebasestorage.googleapis.com/v0/b/tipster-3d872.appspot.com/o/${snapshot.ref._location.path_.replace(/\//, '%2F')}?alt=media`);
    });
  }


  const handleSubmit = (e) => {
    console.log('handlesubmit fired')
    e.preventDefault();
    handleUpload()
  }



  useEffect(() => {
    if (url && name && email && password) {
      createUser({ name, email, password, photo: url })
    }
    //navigate to artist page 
    // <Link to='/artist'> </Link>
    //on artist page have a conditional render ternary operator if user is not undifined render otherwise loading spinner
  }, [url])

  function createUser(user) {
    console.log(user);
    fetch(`http://localhost:4000/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(user => {
        console.log('createUser', user)
        setUser(user)
        history.push('/artist')
      })
  }

  console.log('user from register', user)


  return (
    <div className="App">
      <h1>Create an account</h1>
      <div>

        <form onSubmit={handleSubmit} className="form">
          <ImageUpload setFile={setFile} />
          <input type="text" placeholder="Artist name" value={name} onChange={(e) => setName(e.target.value)}></input>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}