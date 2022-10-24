import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { auth } from './client';

export default function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  const storeUserData = (user) => {
    const providerData = user.providerData[0];
    const userData = { ...providerData, uid: user.uid };

    dispatch(login(userData));
  };

  const authStateChanged = async (user) => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    setUser(user);
    user && storeUserData(user);

    setIsLoading(false);
    setIsLoaded(true);
  };

  const clear = () => {
    setUser(null);
    setIsLoading(true);
    setIsLoaded(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);

    return () => unsubscribe();
  }, []);

  return {
    user,
    isLoading,
    isLoaded,
    isAuthenticated: !!user,
    clear,
  };
}
