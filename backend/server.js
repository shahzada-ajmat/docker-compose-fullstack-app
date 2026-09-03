const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: 'dbxy',
  user: 'postgresx',
  password: 'mypassword',
  database: 'studentdb'
});

// Auto-create table on startup with an ID for ordering
pool.query(`
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name TEXT,
    city TEXT
  );
`);

// Route to fetch all students
app.get('/api/students', async (req, res) => {
  try {
    const result = await pool.query('SELECT name, city FROM students ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to add a student and return the full updated list
app.post('/api/student', async (req, res) => {
  try {
    const { name, city } = req.body;
    if (name && city) {
      await pool.query('INSERT INTO students (name, city) VALUES ($1, $2)', [name, city]);
    }
    const result = await pool.query('SELECT name, city FROM students ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Backend running on port 5000'));