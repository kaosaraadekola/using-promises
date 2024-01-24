const { prompt } = require("enquirer");

const promiseOfInput = prompt({
    type: "autocomplete",
    name: "bestactor",
    message: "Who is the best actor in the movie Avatar: The Way of Water?",
    limit: 10,
    choices: ["Stephen Lang", "Zoe Saldaña", "Sam Worthington"],
});
promiseOfInput.then(handleResult);

function handleResult(answer) {
    console.log("You Picked :", answer.bestactor);

    if (answer.bestactor === "Sam Worthington") {
        pool.query("select movie_name from casts_view where person_name = 'Sam Worthington'").then((results) => {
            displayBestActor(results.rows);
        });

} else if (answer.bestactor === "Stephen Lang") {
    pool.query("select movie_name from casts_view where person_name = 'Stephen Lang'").then((results) => {
        displayBestActor(results.rows);
    });

} else (answer.bestactor === "Zoe Saldaña") 
    pool.query("select movie_name from casts_view where person_name = 'Zoe Saldana'").then((results) => {
        displayBestActor(results.rows);
    });
}


//this part is linking the above enquirer to omdb
const { makeDBConnectionPool } = require("./dbHelp");

const pool = makeDBConnectionPool("omdb");

// pool.query("select movie_name from casts_view where person_name = 'Sam Worthington'").then((results) => {
//     displayBestActor(results.rows);
// });

function displayBestActor(movie_name) {
    for (let row of movie_name) {
        console.log(" The best Actor was in: " + row.movie_name);
    }
}

//part 5 video will help with this part 3 task. its all about linking these two promises together
//the link was the if else statement