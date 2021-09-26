import './App.css';
import React, { useState, useEffect } from 'react';
// import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Artist from './components/Artist';
import Login from './components/Login';
import Tip from './components/Tip';
import StripeContainer from './components/StripeContainer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function App() {
  const [user, setUser] = useState();
  const [id, setId] = useState();
  const [tip, setTip] = useState(0);

  useEffect(() => {
    if (window.localStorage.getItem('user') && !user) setUser(JSON.parse(window.localStorage.getItem('user')))
    if (user) window.localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  function logOut() {
    window.localStorage.clear()
  }

  // console.log('app', user);
  console.log(user)
  return (

    <div className="App">
      <Router >
        {/* <UserContext.Provider value={user}></UserContext.Provider> */}
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/register" >
            <Register setUser={setUser} user={user} />
          </Route>
          <Route path="/artist" >
            <Artist user={user} setUser={setUser} />
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
        </Switch>
      </Router >
      <button onClick={() => logOut()}>log out</button>
    </div>




  );
}

