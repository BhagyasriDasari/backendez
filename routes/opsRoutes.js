const express = require('express');
const { authenticate } = require('../middleware/auth');
const { uploadFileHandler } = require('../controllers/opsController');

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Ops user routes are working');
  });

router.post('/upload', authenticate, uploadFileHandler);

module.exports = router;
