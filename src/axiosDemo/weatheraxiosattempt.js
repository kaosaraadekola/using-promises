const axios = require("axios").default;

//or https://jsonplaceholder.typicode.com/users/1
const url = "https://api.openweathermap.org/data/2.5/weather?lat=37.7749&lon=-122.4194&appid=df88028e541c3e4ea933f92bfda3084f";

const resultingPromise = axios.get(url);
console.log("Asked axios to get " + url);
resultingPromise.then(getWeather);


function getWeather(result) {
    console.log("Promise completed.  Result contains: ");
    console.log(".status: ", result.status);
    console.log(".data: ", result.data);
}