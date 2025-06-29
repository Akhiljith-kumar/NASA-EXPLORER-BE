const express = require('express');
const router = express.Router();
const { getTechData } = require('../controllers/techTransferController');

router.get('/', getTechData);
module.exports = router;
