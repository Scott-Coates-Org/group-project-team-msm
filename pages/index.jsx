import { useAuth } from '../context/Auth';
import Counter from '../components/Counter';
import { ProtectedRoute } from '../components/protectedPage';
import Logout from '../components/Logout';
import Users from '../components/Users';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const Home = () => {
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
