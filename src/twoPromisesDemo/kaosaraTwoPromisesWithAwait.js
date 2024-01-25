const { prompt } = require("enquirer");
const axios = require("axios"); 

async function promptCity() {
    const response = await prompt({
        type: "select",
        name: "city",
        message: "Which city would you like to see the weather for?",
        choices: [
            { name: "Texas", value: "texas" },
            { name: "Lagos", value: "lagos" },
        ],
    });

    return response.city;
}

const cityInfo = {
    texas: { name: "Texas", url: "https://api.openweathermap.org/data/2.5/weather?lat=31.000000&lon=-100.000000" },
    lagos: { name: "Lagos", url: "https://api.openweathermap.org/data/2.5/weather?lat=6.465422&lon=3.406448" },
};

async function getWeather() {
    const selectedCity = await promptCity();
    
    try {
        const response = await axios.get(`${cityInfo[selectedCity].url}&appid=${apiKey}`);
        const weatherData = response.data;
        console.log(`Weather report for ${cityInfo[selectedCity].name}:`);
        console.log(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
    }
}

getWeather();

