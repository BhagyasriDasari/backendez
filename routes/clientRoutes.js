const express = require('express');
const { signUpHandler, loginHandler, listFilesHandler } = require('../controllers/clientController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

router.post('/signup', signUpHandler);
router.post('/login', loginHandler);
router.get('/files', authenticate, listFilesHandler);

module.exports = router;
