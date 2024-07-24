const Project = require('../models/Project');

exports.submitProject = async (req, res) => {
  const { teamName, members, challenge, submissionLink, documentation, demoVideo, presentation } = req.body;

  try {
    const project = new Project({
      teamName,
      members,
      challenge,
      submissionLink,
      documentation,
      demoVideo,
      presentation,
    });

    await project.save();
    res.status(201).json({ message: 'Project submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('members').populate('challenge');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

