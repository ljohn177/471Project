
const mysql = require('mysql');
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'mydb'
});
 
connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database!');
});