// Dependencies

'use strict';

require('dotenv').config();
const mysql = require('mysql');

// Set up connection parameters
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: 'localhost',
  port: process.env.PORT || 3306,
  user: process.env.MYSQL_USER,        // in .env file
  password: process.env.MYSQL_PASSWD,  // in .env file
  database: 'burgers_db'
});
}

// Attempt to connecto to the database
connection.connect(error => {
  if (error) {
    console.error('ERROR: Unable to make a connection' + error.stack);
    return;
  }
   
  console.log('Connected to database as ID: ' + connection.threadId);
});

// Export the connection
module.exports = connection;