const axios = require("axios");

const omdbApiClient = axios.create({
    baseURL: 'http://www.omdbapi.com/',
})

module.exports = omdbApiClient;