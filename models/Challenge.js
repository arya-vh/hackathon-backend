const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;

