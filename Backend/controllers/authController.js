const axios = require('axios');
const stravaConfig = require('../config/stravaConfig');
const User = require('../models/User');

// Redirect to Strava for authentication
exports.stravaLogin = (req, res) => {
  const authURL = `https://www.strava.com/oauth/authorize?client_id=${stravaConfig.clientID}&redirect_uri=${stravaConfig.redirectURI}&response_type=code&scope=read,activity:read_all`;

  res.redirect(authURL);
};

// Exchange code for access token
exports.stravaCallback = async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: stravaConfig.clientID,
      client_secret: stravaConfig.clientSecret,
      code: code,
      grant_type: 'authorization_code',
    });

    // Save access token in database (simplified for demonstration)
    const accessToken = response.data.access_token;
    const refreshToken = response.data.refresh_token;

    // Example: Save tokens to User model in MongoDB
    // Replace with actual database saving logic
    const user = new User({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });

    await user.save();

    res.send('Authentication successful! You can now close this window.');
  } catch (error) {
    console.error('Error exchanging code for access token:', error.message);
    res.status(500).send('Failed to authenticate with Strava.');
  }
};
