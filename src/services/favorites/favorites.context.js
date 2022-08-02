import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavs = async value => {
    try {
      const json = JSON.stringify(value);
      await AsyncStorage.setItem('@favorites', json);
    } catch (error) {
      console.log('error setting', error);
    }
  };

  const loadFavs = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorites');
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
    loadFavs();
  }, []);

  useEffect(() => {
    saveFavs(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ addFavRestaurant, removeFavRestaurant, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
