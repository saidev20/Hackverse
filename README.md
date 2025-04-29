# TimeTable Management System

This project is a full-stack timetable management system built with React (frontend) and Express/SQLite (backend).

## Prerequisites
- Node.js (v18 or above recommended)
- npm (comes with Node.js)

## Getting Started

### 1. Install Dependencies
Navigate to the project root (where `package.json` is located) and run:

```
npm install
```

### 2. Start the Backend Server
The backend server uses Express and SQLite. To start it:

```
node backend/server.js
```

The backend will run on [http://localhost:5000](http://localhost:5000).

### 3. Start the Frontend (React + Vite)
In a new terminal, from the same directory, run:

```
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

### 4. Usage
- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Login with:
  - **Username:** `admin`
  - **Password:** `admin123`
- Use the dashboard to add/view teacher details and generate timetables.

## Project Structure
- `src/` - React frontend source code
- `backend/` - Express backend and SQLite database
- `public/` - Static assets

## Notes
- Make sure both backend and frontend are running for full functionality.
- The backend will create `timetable.db` automatically if it does not exist.

## Troubleshooting
- If you change backend code, restart the backend server.
- If you change frontend code, Vite provides hot reload by default.

---
Feel free to contribute or raise issues!
