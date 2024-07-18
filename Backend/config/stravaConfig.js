const axios = require('axios');

const stravaConfig = {
  clientID: process.env.STRAVA_CLIENT_ID,
  clientSecret: process.env.STRAVA_CLIENT_SECRET,
  baseURL: 'https://www.strava.com/api/v3',
  redirectURI: process.env.STRAVA_REDIRECT_URI,
};

module.exports = stravaConfig;
