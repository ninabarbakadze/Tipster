import './App.css';
import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import ArtistWelcome from './components/ArtistWelcome';
import Login from './components/Login';
import Tip from './components/Tip';
import StripeContainer from './components/StripeContainer';
import StripeConnect from './components/StripeConnect';
import ArtistDashboard from './components/ArtistDashboard';
import TipExtension from './components/TipExtention';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stripe from 'stripe';


export default function App () {
  const [user, setUser] = useState();
  const [tip, setTip] = useState();
  const [message, setMessage] = useState('');
  
  const history = useHistory();

// console.log('from app', tip)

  useEffect(() => {
    if (window.localStorage.getItem('user') && !user) setUser(JSON.parse(window.localStorage.getItem('user')))
    if (user) window.localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  function logOut () {
    window.localStorage.clear();
    // history.push('/')
  }

  console.log(user)

  // console.log('app', user);
  // console.log(user)
  return (

    <div className="App">
      <Router >
        {/* <UserContext.Provider value={user}></UserContext.Provider> */}
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/register" >
            <Register setUser={setUser} user={user} />
          </Route>
          <Route path='/connect-to-stripe'>
               <StripeConnect user={user}/>
          </Route>
          <Route path="/success" >
            <ArtistWelcome user={user} setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} user={user} />
          </Route>
          <Route path='/tip/:id'>
            {/* <Route path='/tip'> */}
            <Tip setUser={setUser} user={user} tip={tip} setTip={setTip}></Tip>
          </Route>
          <Route path='/tip' >
            <StripeContainer tip={tip} user={user} />
          </Route>
          <Route path='/artist'>
            <ArtistDashboard user={user} logOut={logOut} />
          </Route>
          <Route path='/message'>
            <TipExtension tip={tip} user={user} message={message} setMessage={setMessage}/>
          </Route>
        </Switch>
      </Router >
      {/* <button onClick={() => logOut()}>log out</button> */}
    </div>




  );
}

