const axios = require('axios');
const BASE_URL = process.env.BASE_URL_IMAGE;

const nasaImageApi = axios.create({
  baseURL: BASE_URL,
});

module.exports = nasaImageApi;