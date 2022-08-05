const { mocks, addMockImage } = require('./mock');
const url = require('url');
const functions = require('firebase-functions');

const addGoogleImage = restaurant => {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    return addMockImage(restaurant);
  } else {
    restaurant.photos = [
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
        functions.config().google.key
      }`,
    ];
    return restaurant;
  }
};

module.exports.placesRequest = (request, res, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (!location) res.send('no location provided');
  if (mock === 'true') {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
      res.json(data);
    }
  } else {
    client
      .placesNearby({
        params: {
          location,
          radius: 1500,
          type: 'restaurant',
          key: functions.config().google.key,
        },
        timeout: 1000,
      })
      .then(({ data }) => {
        data.results = data.results.map(addGoogleImage);
        res.json(data);
      })
      .catch(e => {
        res.status(400);
        return res.send(e.response.data.error_message);
      });
  }
};
