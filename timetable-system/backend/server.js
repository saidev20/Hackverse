import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// SQLite setup
const dbPath = path.resolve(__dirname, 'timetable.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database opening error:', err);
  } else {
    console.log("Connected to SQLite database at", dbPath);
  }
});

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS teachers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    teacherId TEXT NOT NULL,
    teacherName TEXT NOT NULL,
    subjectCode TEXT NOT NULL,
    subjectName TEXT NOT NULL,
    credits INTEGER NOT NULL,
    isLab INTEGER NOT NULL
  )
`, (err) => {
  if (err) console.error("Table creation error:", err);
  else console.log("Teachers table is ready.");
});

// API endpoint to add teacher
app.post('/api/teachers', (req, res) => {
  const { teacherId, teacherName, subjectCode, subjectName, credits, isLab } = req.body;

  if (!teacherId || !teacherName || !subjectCode || !subjectName || credits === "") {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("Received teacher data:", req.body);

  db.run(
    `INSERT INTO teachers (teacherId, teacherName, subjectCode, subjectName, credits, isLab)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [teacherId, teacherName, subjectCode, subjectName, credits, isLab ? 1 : 0],
    function (err) {
      if (err) {
        console.error("DB Insertion Error:", err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json({ message: 'Teacher added', id: this.lastID });
    }
  );
});
app.get("/api/teachers", (req, res) => {
    db.all("SELECT * FROM teachers", (err, rows) => {
      if (err) {
        res.status(500).json({ error: "Database query failed" });
      } else {
        res.json(rows);
      }
    });
  });
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
