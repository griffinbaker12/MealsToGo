const { locations: locationsMock } = require('./geocode.mock');
const url = require('url');
const functions = require('firebase-functions');

module.exports.geocodeRequest = (req, res, client) => {
  const { city, mock } = url.parse(req.url, true).query;
  if (mock === 'true') {
    const mock = locationsMock[city.toLowerCase()];
    return res.json(mock);
  } else {
    client
      .geocode({
        params: {
          address: city,
          key: functions.config().google.key,
        },
        timeout: 1000,
      })
      .then(({ data }) => res.json(data))
      .catch(e => {
        res.status(400);
        return res.send(e.response.data.error_message);
      });
  }
};
