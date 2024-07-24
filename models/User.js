const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ['Participant', 'Mentor', 'Organizer', 'Judge'], required: true },
  password: { type: String, required: true },
  additionalInfo: { type: mongoose.Schema.Types.Mixed },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

