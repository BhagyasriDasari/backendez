const express = require('express');
const { authenticate } = require('../middleware/auth');
const { uploadFileHandler } = require('../controllers/opsController');

const router = express.Router();

router.post('/upload', authenticate, uploadFileHandler);

module.exports = router;
