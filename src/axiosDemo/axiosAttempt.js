const axios = require("axios").default;

const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
const resultingPromise = axios.get(url);
