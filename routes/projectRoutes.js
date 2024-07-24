const express = require('express');
const { submitProject, getProjects } = require('../controllers/projectController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, submitProject);
router.get('/', getProjects);

module.exports = router;

