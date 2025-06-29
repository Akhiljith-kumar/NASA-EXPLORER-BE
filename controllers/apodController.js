const nasaApi = require('../services/nasaApiService');

exports.getApod = async (req, res) => {
  try {
    const { data } = await nasaApi.get('/planetary/apod');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch APOD' });
  }
};
