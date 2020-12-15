// Dependencies
const mysql = require("mysql");

// Define connection
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     port: 3306,
//     password: "mysql1234",
//     database: "burgers_db"
// });
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(proces.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "mysql1234",
        database: "burgers_db"
    });
}
// Connect to the server
connection.connect((err) => {
    if (err) throw err;
    console.log("Connect as ID: " + connection.threadId + "\n");
});

module.exports = connection;