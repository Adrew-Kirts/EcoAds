const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;
const db = new sqlite3.Database(':memory:'); // Using an in-memory database for example

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (HTML, CSS, JS)

db.serialize(() => {
  db.run(`
    CREATE TABLE ads (
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       email TEXT NOT NULL,
                       description TEXT NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Table "ads" created successfully');
    }
  });

  db.run(`
    INSERT INTO ads (email, description) VALUES
                                           ('example1@example.com', 'Description of ad 1'),
                                           ('example2@example.com', 'Description of ad 2')
  `, (err) => {
    if (err) {
      console.error('Error inserting data:', err.message);
    } else {
      console.log('Initial data inserted successfully');
    }
  });
});

app.get('/api/ads', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const search = req.query.search || '';
  const limit = 10;
  const offset = (page - 1) * limit;

  let query = `SELECT * FROM ads WHERE description LIKE ? LIMIT ? OFFSET ?`;
  let params = [`%${search}%`, limit, offset];

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    db.get(`SELECT COUNT(*) as count FROM ads WHERE description LIKE ?`, [`%${search}%`], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.json({
        ads: rows,
        page,
        totalPages: Math.ceil(result.count / limit)
      });
    });
  });
});

app.post('/api/ads', (req, res) => {
  const { email, description } = req.body;
  if (!email || !description) {
    res.status(400).json({ error: 'Email and description are required' });
    return;
  }

  const query = `INSERT INTO ads (email, description) VALUES (?, ?)`;
  const params = [email, description];

  db.run(query, params, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ success: true, id: this.lastID });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
