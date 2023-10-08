
const mysql = require('mysql');

const connection = createConnection({
  host: 'localhost',
  user: 'username',
  pass: 'password',
  database: 'epay'
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database!');
});
