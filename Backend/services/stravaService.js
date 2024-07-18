const axios = require('axios');
const stravaConfig = require('../config/stravaConfig');

// Example: Fetch activities from Strava
exports.getActivities = async (accessToken) => {
  try {
    const response = await axios.get(`${stravaConfig.baseURL}/athlete/activities`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching activities from Strava:', error.message);
    throw new Error('Failed to fetch activities from Strava.');
  }
};

// Example: Update activity on Strava
exports.updateActivity = async (activityId, updatedData, accessToken) => {
  try {
    const response = await axios.put(`${stravaConfig.baseURL}/activities/${activityId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error updating activity on Strava:', error.message);
    throw new Error('Failed to update activity on Strava.');
  }
};
