import useFirebaseAuth from "../firebase/useFirebaseAuth";
import React, { useContext, createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  isLoaded: false,
  user: null,
  clear: () => {}
});

export const AuthProvider = ({ children }) => {
  const { user, isLoading, isLoaded, isAuthenticated, clear } = useFirebaseAuth();

  return (
    <AuthContext.Provider
      value={{ isLoading, isLoaded, user, isAuthenticated, clear }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
