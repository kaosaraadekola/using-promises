const { prompt } = require("enquirer");

const promiseOfInput = prompt({
    type: "autocomplete",
    name: "mood",
    message: "How are you doing today?",
    limit: 10,
    choices: ["Fantastic", "Meh", "Not too bad"],
});
promiseOfInput.then(handleResult);

function handleResult(answer) {
    console.log("Today is a great day to feel:", answer.mood);
}

