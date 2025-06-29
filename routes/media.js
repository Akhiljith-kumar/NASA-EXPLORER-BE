const express = require('express');
const router = express.Router();
const { searchMedia } = require('../controllers/mediaController');

router.get('/search', searchMedia);
module.exports = router;
