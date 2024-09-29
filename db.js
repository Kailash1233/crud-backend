// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost', // Your MySQL host
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'mysql', // Your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = db;
