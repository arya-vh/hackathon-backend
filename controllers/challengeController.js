const Challenge = require('../models/Challenge');

exports.getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addChallenge = async (req, res) => {
  const { title, description, imageUrl } = req.body;

  try {
    const challenge = new Challenge({
      title,
      description,
      imageUrl,
    });

    await challenge.save();
    res.status(201).json({ message: 'Challenge added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

