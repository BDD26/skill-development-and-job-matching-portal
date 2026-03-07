require('dotenv').config();
const express = require('express');
const cors = require('cors');

// database connection helper
const connectDB = require("./config/db");

// route modules
const usersRouter = require('./routes/users');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// Connect to MongoDB
connectDB();

// Basic Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running', status: 'OK' });
});

app.get('/', (req, res) => {
  res.send('Welcome to MERN Backend API');
});

// api endpoints
app.use('/users', usersRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong', message: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
