const axios = require('axios');
const { formatDate } = require('../utils/dateUtils');
const nasaApi = require('../services/nasaApiService');

exports.getNeoStats = async (req, res) => {
  try {
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 6);

    const startDate = req.query.start || formatDate(sevenDaysAgo);
    const endDate = req.query.end || formatDate(today);

    const response = await nasaApi.get('/neo/rest/v1/feed', {
      params: {
        start_date: startDate,
        end_date: endDate
      }
    });

    const neoData = response.data.near_earth_objects;

    const result = Object.entries(neoData).map(([date, objects]) => ({
      date,
      count: objects.length
    }));

    res.json(result);
  } catch (error) {
    console.error('NEO fetch error:', error.message);
    res.status(500).json({ error: 'Failed to fetch NEO data' });
  }
};
