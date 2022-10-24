import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/client';
import { useAuth } from '../context/Auth';
import { logout } from '../redux/authSlice';

const Logout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { clear } = useAuth();

  const logoutHandler = () => {
    signOut(auth);
    clear();
    dispatch(logout());
  };

  return (
    <button onClick={() => logoutHandler()} className="button">
      Logout
    </button>
  );
};

export default Logout;
