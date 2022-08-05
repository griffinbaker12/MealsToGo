import { useState, createContext, useEffect } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState(null);

  const onSearch = searchKeyword => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    setIsLoading(true);
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setError(null);
        setLocation(result);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
