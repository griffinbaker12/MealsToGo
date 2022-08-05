const functions = require('firebase-functions');
const { geocodeRequest } = require('./geocode');
const { placesRequest } = require('./places');

const { Client } = require('@googlemaps/google-maps-services-js');

const client = new Client({});

// takes a place and translates into lat and lng
exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, client);
});
