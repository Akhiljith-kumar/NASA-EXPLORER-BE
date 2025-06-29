const axios = require('axios');

exports.getNeoStats = async (req, res) => {
  try {
    const startDate = req.query.start || '2025-06-20';
    const endDate = req.query.end || '2025-06-26';

    const response = await axios.get('https://api.nasa.gov/neo/rest/v1/feed', {
      params: {
        start_date: startDate,
        end_date: endDate,
        api_key: process.env.NASA_API_KEY
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
