import { createContext, useState, useEffect, useContext } from 'react';
import { LocationContext } from '../location/location.context';
import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const fetchRestaurants = location => {
    if (!location) return;
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then(transformedData => {
          setRestaurants(transformedData);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationStr = `${location.lat},${location.lng}`;
      fetchRestaurants(locationStr);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
