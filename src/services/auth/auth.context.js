import React, { useState, createContext } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();

const firebaseConfig = {
  apiKey: 'AIzaSyCeuhdEFYMcjHRAfl_5TqHgjrGqUFAVSss',
  authDomain: 'mealstogo-cf96a.firebaseapp.com',
  projectId: 'mealstogo-cf96a',
  storageBucket: 'mealstogo-cf96a.appspot.com',
  messagingSenderId: '179830039570',
  appId: '1:179830039570:web:dad9a78e9595c996b064cb',
};

let auth;

if (getApps().length < 1) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} else {
  auth = getAuth(getApp());
}

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        setIsLoading(false);
        setUser(user);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
