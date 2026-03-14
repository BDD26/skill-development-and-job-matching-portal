require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── API Routes ───────────────────────────────────────────────────────────────

// Public / Auth
app.use('/api/auth',          require('./routes/authRoutes'));

// Public Content
app.use('/api/jobs',          require('./routes/jobRoutes'));
app.use('/api/skills',        require('./routes/skillRoutes'));

// Authenticated – Any User
app.use('/api/users',         require('./routes/userRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));

// Student
app.use('/api/students',      require('./routes/studentRoutes'));

// Applications (shared – student applies, employer manages)
app.use('/api/applications',  require('./routes/applicationRoutes'));

// Employer
app.use('/api/employers',     require('./routes/employerRoutes'));

// Interviews (employer)
app.use('/api/interviews',    require('./routes/interviewRoutes'));

// Admin / Placement Cell
app.use('/api/admin',         require('./routes/adminRoutes'));

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ─── 404 Catch-all ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
