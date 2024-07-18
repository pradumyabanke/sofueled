const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
