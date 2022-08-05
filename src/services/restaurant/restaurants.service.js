import camelize from 'camelize';
import { host } from '../../utils/env';

export const restaurantsRequest = location => {
  return fetch(`${host}/placesNearby?location=${location}`).then(res =>
    res.json()
  );
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map(restaurant => {
    return {
      ...restaurant,
      isClosedTemporarily:
        restaurant.business_status === 'CLOSED_TEMPORARILY' ? true : false,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      address: restaurant.vicinity,
      placeId: restaurant.place_id,
    };
  });
  return camelize(mappedResults);
};
