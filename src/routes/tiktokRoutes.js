const express = require('express');
const router = express.Router();
const tiktokController = require('../controllers/tiktokController');

router.get('/auth', tiktokController.getAuthUrl);
router.get('/callback', tiktokController.handleCallback); // Make sure this line is present

module.exports = router;