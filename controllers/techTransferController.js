const nasaApi = require('../services/nasaApiService');

exports.getTechData = async (req, res) => {
  try {
    const { category = 'space' } = req.query;

    const { data } = await nasaApi.get('/techtransfer/patent/', {
      params: { patent: category }
    });

    res.json(data.results);
  } catch (error) {
    console.error('TechTransfer error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch TechTransfer data' });
  }
};
