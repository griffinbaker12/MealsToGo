import { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../auth/auth.context';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  const saveFavs = async (uid, value) => {
    try {
      const json = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, json);
    } catch (error) {
      console.log('error setting', error);
    }
  };

  const loadFavs = async uid => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (error) {
      console.log('error loading', error);
    }
  };

  const addFavRestaurant = restaurant => {
    setFavorites(prevState => [...prevState, restaurant]);
  };

  const removeFavRestaurant = restaurant => {
    const newFavorites = favorites.filter(
      favorite => favorite.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavs(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favorites.length) {
      saveFavs(user.uid, favorites);
    }
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider
      value={{ addFavRestaurant, removeFavRestaurant, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
