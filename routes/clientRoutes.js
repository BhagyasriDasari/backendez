const express = require('express');
const { signUpHandler, loginHandler, listFilesHandler } = require('../controllers/clientController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Test Route: Base route for the client path
router.get('/', (req, res) => {
  res.send('Client user routes are working');
});

// Client functionality routes
router.post('/signup', signUpHandler);
router.post('/login', loginHandler);
router.get('/files', authenticate, listFilesHandler);

module.exports = router;
