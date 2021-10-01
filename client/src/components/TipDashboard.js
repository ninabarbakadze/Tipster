import React, {useState, useEffect} from 'react';
import TipStructure from './TipStructure';

export default function TipDashboard ({ user }) {
 const [tips, setTips] = useState([]);

 useEffect(() => {
     if (user) getTips()
 }, [user]);

 console.log('this is user from tips', user)

 console.log(user)
 
  function getTips() {
    fetch(`http://localhost:4000/tipped-amount`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(tip => setTips(tip))
  }

  console.log(tips)
  const sorted = tips.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  
  console.log('this is sorter', sorted)
 


  return (
    <div className='tip-dashboard'>
      <p className='tips'>Your tips</p>
      <ul >
        {sorted.map(tip => <li id='tip' key={tip.id}><TipStructure tip={tip} /></li>)}
      </ul>
    </div>
  )
}