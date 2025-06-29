const express = require('express');
const router = express.Router();

const apodRoutes = require('./apod');
const mediaRoutes = require('./media');
const donkiRoutes = require('./donki');
const techRoutes = require('./techTransfer');
const neoRoutes = require('./neo');

router.use('/apod', apodRoutes);
router.use('/media', mediaRoutes);
router.use('/donki', donkiRoutes);
router.use('/tech', techRoutes);
router.use('/neo', neoRoutes);

module.exports = router;
