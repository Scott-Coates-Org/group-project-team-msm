import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/Auth';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoaded, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if ((!isLoading && !isLoaded) || (isLoaded && !isAuthenticated)) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoaded, isLoading]);

  return (
    <>
      {isAuthenticated ? (
        children
      ) : (
        <div>
        </div>
      )}
    </>
  );
};
