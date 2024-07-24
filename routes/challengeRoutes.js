const express = require('express');
const { getChallenges, addChallenge } = require('../controllers/challengeController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getChallenges);
router.post('/', authMiddleware, addChallenge);

module.exports = router;

