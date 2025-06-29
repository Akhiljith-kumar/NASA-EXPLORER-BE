const nasaApi = require('../services/nasaApiService');

exports.getSpaceWeather = async (req, res) => {
  try {
    const { startDate = '2024-01-01', endDate = '2024-12-31' } = req.query;
    const { data } = await nasaApi.get('/DONKI/notifications', {
      params: {
        startDate,
        endDate,
        type: 'all'
      }
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch space weather data' });
  }
};
