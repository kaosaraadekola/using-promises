const { makeDBConnectionPool } = require("./dbHelp");

const pool = makeDBConnectionPool("async-demo");

pool.query("select * from hiscores").then((results) => {
    displayTime(results.rows);
});

function displayTime(timeRows) {
    for (let row of timeRows) {
        console.log(row.username + " Date Completed " + row.time);
    }
}


// a program which runs a database query and prints the result. This query is printing
//time completed