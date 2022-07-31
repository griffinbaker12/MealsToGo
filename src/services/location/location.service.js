import camelize from 'camelize';
import { locations } from './location.mock';

export const locationRequest = searchTerm => {
  return new Promise((res, rej) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) rej('not found');
    else res(locationMock);
  });
};

export const locationTransform = ({ results }) => {
  const { geometry = {} } = camelize(results)[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
