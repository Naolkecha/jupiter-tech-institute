const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const app = express();
const port = 3000;

const cors = require('cors');

app.use(cors({
  origin: 'https://www.jupitertechinstitute.com',
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Naol@24!',
  database: 'students',
});


// Use pool.getConnection() instead of connection.connect()
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error getting MySQL connection:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Parse JSON data in request body
app.use(bodyParser.json());

// Define login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Validate username and password
  if (!username || !password) {
    res.status(400).send('Missing username or password');
    return;
  }
  // Check username and password against database
  const query = `SELECT * FROM admin WHERE username = ? AND password = ?`;
   pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      res.status(500).send('Internal server error');
      return;
    }
      connection.query(query, [username, password], (err, results) => {
        if (err) {
          console.error('Error querying database:', err);
          res.status(500).send('Internal server error');
          return;
        }

    if (results.length > 0) {
      // Login successful
      // Generate a JWT token
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(200).send({ success: true, token });
    } else {
      // Invalid credentials
      res.status(401).send('Invalid usernam=e or password');
      console.log("not correct")
    }
  });

    connection.release();
});
});

//creating route for the app
app.get('/api/students', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    connection.query('SELECT * FROM students', function (err, rows, fields) {
      connection.release(); // Release the connection after executing the query

      if (!err) {
        res.json(rows); // Send the student data as JSON
      } else {
        console.log('Error while performing Query:', err);
        res.status(500).json({ error: 'Error while performing Query' });
      }
    });
  });
});
// Handle form submission
app.post('/api/register', (req, res) => {
  const formData = req.body;

  // Validate the form data (add more validation as needed)
  if (!formData.fname || !formData.Lname || !formData.phone || !formData.email || !formData.Age || !formData.gender || !formData.education || !formData.course) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Insert user data into MySQL database
  const sql = 'INSERT INTO students (fname, Lname, phone, email, Age, gender, education, course) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [formData.fname, formData.Lname, formData.phone, formData.email, formData.Age, formData.gender, formData.education, formData.course];

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting data into MySQL:', err);
        connection.release();
        return res.status(500).json({ error: 'Registration failed', details: err.message });
      }

      // Send a success response
      connection.release();
      res.status(200).json({ message: 'Registration successful', user: formData });
    });
  });
});

app.delete('/api/students/delete/:studentId', (req, res) => {
  const studentId = req.params.studentId;

  if (!studentId) {
    return res.status(400).json({ error: 'Student ID is required' });
  }

  // Delete the student from the database
  const deleteQuery = 'DELETE FROM students WHERE id = ?';

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    connection.query(deleteQuery, [studentId], (err, result) => {
      connection.release();

      if (err) {
        console.error('Error deleting data from MySQL:', err);
        return res.status(500).json({ error: 'Deletion failed', details: err.message });
      }

      if (result.affectedRows > 0) {
        // Student deleted successfully
        res.status(200).json({ message: 'Student deleted successfully' });
      } else {
        // No student found with the given ID
        res.status(404).json({ error: 'Student not found with the given ID' });
      }
    });
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
