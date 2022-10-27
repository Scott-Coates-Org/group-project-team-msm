import { useEffect, useState } from 'react';
import { useAuth } from '../context/Auth';
import Counter from '../components/Counter';
import { ProtectedRoute } from '../components/protectedPage';
import Logout from '../components/Logout';
import Users from '../components/Users';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Home = () => {
  const [publishableKey, setPublishableKey] = useState('');

  useEffect(() => {
    fetch('api/keys', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setPublishableKey(data.publishableKey);
      });
  });

  if (!publishableKey) {
    return 'loading....';
  }

  const stripe = loadStripe(publishableKey);

  return (
    <ProtectedRoute>
      <div className="App App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>pages/index.js</code> and save to reload.
        </p>
        <Users />
        <Counter />
        <p>
          <Logout />
        </p>
      </div>
    </ProtectedRoute>
  );
};

export default Home;
