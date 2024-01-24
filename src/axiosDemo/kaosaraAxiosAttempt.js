const axios = require("axios").default;

const url = "https://api.tvmaze.com/shows/83/episodes";
const resultingPromise = axios.get(url);
resultingPromise.then(processResolvedPromise);

console.log ({resultingPromise});

function processResolvedPromise(resultFromPromise) {
    
    resultingPromise.then(function (resultFromPromise) {
        console.log ("promise resovled. result is : ")
        console.log(resultFromPromise.status)
        console.log(resultFromPromise.data)
    })
}
