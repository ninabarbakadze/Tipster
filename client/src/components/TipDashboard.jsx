import React, { useState, useEffect } from 'react';
import TipStructure from './TipStructure';

const TipDashboard = ({ user }) => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    if (user) getTips();
  }, [user]);

  function getTips() {
    fetch('http://localhost:4000/tipped-amount', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(tip => setTips(tip));
  }

  const sorted = tips.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className='tip-dashboard'>
      <p className='tips'>Your tips</p>
      <ul >
        {sorted.map(tip => <li id='tip' key={tip.id}><TipStructure tip={tip} /></li>)}
      </ul>
    </div>
  );
};

export default TipDashboard;
