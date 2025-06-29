const express = require('express');
const router = express.Router();
const { getNeoStats } = require('../controllers/neoController');

router.get('/stats', getNeoStats);

module.exports = router;
