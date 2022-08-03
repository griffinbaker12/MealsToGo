import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { theme } from './src/infra/theme';
import { RestaurantsContextProvider } from './src/services/restaurant/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';
import Navigation from './src/infra/navigation';
import { AuthContextProvider } from './src/services/auth/auth.context';

const firebaseConfig = {
  apiKey: 'AIzaSyCeuhdEFYMcjHRAfl_5TqHgjrGqUFAVSss',
  authDomain: 'mealstogo-cf96a.firebaseapp.com',
  projectId: 'mealstogo-cf96a',
  storageBucket: 'mealstogo-cf96a.appspot.com',
  messagingSenderId: '179830039570',
  appId: '1:179830039570:web:dad9a78e9595c996b064cb',
};

let auth;
console.log(getApps());

if (getApps().length < 1) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} else {
  auth = getAuth(getApp());
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  useEffect(() => {
    signInWithEmailAndPassword(auth, 'g@gmail.com', '123stuff')
      .then(user => setIsAuthenticated(true))
      .catch(e => console.error(e));
  }, []);

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider
        auth={auth}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      >
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation isAuthenticated={isAuthenticated} />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
