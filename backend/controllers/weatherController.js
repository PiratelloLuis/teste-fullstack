// backend/controllers/weatherController.js
const axios = require('axios');

const API_KEY = '614abbbabd920093dadf1bad4a569630';

exports.getWeather = async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.0/weather`,
      {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
          lang: 'pt_br'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar clima', error: error.response?.data || error.message });
  }
};
