const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  challenge: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' },
  submissionLink: { type: String, required: true },
  documentation: { type: String },
  demoVideo: { type: String },
  presentation: { type: String },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

