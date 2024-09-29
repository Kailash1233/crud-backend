// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Import the MySQL connection

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Query the database
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
    if (error) {
      return res.status(500).send('Server error');
    }
    
    if (results.length > 0) {
      res.status(200).json({ success: true, user: results[0] });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  });
});

// Start the server
const PORT = 5000; // You can choose another port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
