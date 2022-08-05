import camelize from 'camelize';
import { host } from '../../utils/env';

export const locationRequest = searchTerm => {
  return fetch(`${host}/geocode?city=${searchTerm}`).then(res => res.json());
};

export const locationTransform = ({ results }) => {
  const { geometry = {} } = camelize(results)[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};

// key=API_KEY
// AIzaSyA3DDgoQWrZqSuV87AB83uIHcGIjFD_CU4
