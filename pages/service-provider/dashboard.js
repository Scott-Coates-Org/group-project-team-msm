import Link from 'next/link';
import { ProtectedRoute } from '../../components/protectedPage';
import Logout from '../../components/Logout';
import Cashout from '../../components/Cashout';




const user = 


const SPDash = () => {

 

  return (
    <ProtectedRoute>
      <div className="App App-header">
        <p>
          <Cashout />
        </p>

        <p>
          <Logout />
        </p>
      </div>
    </ProtectedRoute>
  );
};

export default SPDash;
