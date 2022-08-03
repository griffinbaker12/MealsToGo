import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({
  auth,
  isAuthenticated,
  setIsAuthenticated,
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => null;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
