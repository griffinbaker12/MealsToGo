import { mocks, mockImages } from './mock';
import camelize from 'camelize';
export const restaurantsRequest = location => {
  return new Promise((res, rej) => {
    const mock = mocks[location];
    if (!mock) rej('not found');
    else res(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map(p => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
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
