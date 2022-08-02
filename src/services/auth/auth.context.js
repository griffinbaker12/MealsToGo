import { useState, useEffect, createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import loginRequest from './auth.service';

const firebaseConfig = {
  apiKey: 'AIzaSyCeuhdEFYMcjHRAfl_5TqHgjrGqUFAVSss',
  authDomain: 'mealstogo-cf96a.firebaseapp.com',
  projectId: 'mealstogo-cf96a',
  storageBucket: 'mealstogo-cf96a.appspot.com',
  messagingSenderId: '179830039570',
  appId: '1:179830039570:web:dad9a78e9595c996b064cb',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(user => {
        setUser(user);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e);
        setIsLoading(false);
      });
  };

  return (
    <AuthContextProvider value={{ user, isLoading, error, onLogin }}>
      {children}
    </AuthContextProvider>
  );
};
