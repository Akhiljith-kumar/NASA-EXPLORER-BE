const axios = require('axios');

exports.searchMedia = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await axios.get(`https://images-api.nasa.gov/search?q=${q}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch media' });
  }
};
