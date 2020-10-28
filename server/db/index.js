var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

connection.connect((error) => {
  if (error) {
    console.log('error connection:' + error);
    return;
  } else {
    console.log('connected');
  }
});

module.exports.connection = connection;