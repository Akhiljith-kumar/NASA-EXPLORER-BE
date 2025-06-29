const express = require('express');
const router = express.Router();
const { getSpaceWeather } = require('../controllers/donkiController');

router.get('/alerts', getSpaceWeather);
module.exports = router;
