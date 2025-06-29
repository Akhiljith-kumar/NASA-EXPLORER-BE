const axios = require('axios');
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.NASA_API_KEY;

const nasaApi = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY }
});

module.exports = nasaApi;
