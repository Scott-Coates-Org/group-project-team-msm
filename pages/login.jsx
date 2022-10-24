import { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { auth } from '../firebase/client';
import { login } from '../redux/authSlice';
import styles from './login.module.css';

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;
    if (user) {
      dispatch(
        login({
          displayName: user.user.displayName,
          email: user.user.email,
          accessToken: user.user.accessToken,
        }),
      );
      router.push('/');
    }
  }, [user, loading, error, dispatch, router]);

  return (
    <div className={styles.container}>
      <button onClick={() => signInWithGoogle()} className="button">
        <img src="/images/googlelogo.png" alt="Google Logo" />
        Continue with Google
      </button>
      {user && "user: " + JSON.stringify(user, null, 2)}
      {loading && "loading:" + loading}
      {error && "error: " + JSON.stringify(error, Object.getOwnPropertyNames(error), 2)}
    </div>
  );
};

export default Login;
