const liveHost = 'https://us-central1-mealstogo-cf96a.cloudfunctions.net';
const localHost = 'http://localhost:5001/mealstogo-cf96a/us-central1';
export const isDev = process.env.NODE_ENV === 'development';
export const host = isDev ? localHost : liveHost;
