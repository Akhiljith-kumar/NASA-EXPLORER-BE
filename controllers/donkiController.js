const nasaApi = require('../services/nasaApiService');
const { formatDate } = require('../utils/dateUtils');

exports.getSpaceWeather = async (req, res) => {
  try {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    const {
      startDate = formatDate(thirtyDaysAgo),
      endDate = formatDate(today),
    } = req.query;

    const { data } = await nasaApi.get('/DONKI/notifications', {
      params: {
        startDate,
        endDate,
        type: 'all'
      }
    });

    res.json(data);
  } catch (error) {
    console.error('Space weather fetch error:', error.message);
    res.status(500).json({ error: 'Failed to fetch space weather data' });
  }
};
