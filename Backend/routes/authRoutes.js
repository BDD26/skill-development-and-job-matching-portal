const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// POST /api/auth/register – Register new user (student or employer)
router.post('/register', (req, res) => {
  res.json({ message: 'POST /api/auth/register – TODO' });
});

// POST /api/auth/login – Login, returns JWT token
router.post('/login', (req, res) => {
  res.json({ message: 'POST /api/auth/login – TODO' });
});

// POST /api/auth/forgot-password – Initiate password reset
router.post('/forgot-password', (req, res) => {
  res.json({ message: 'POST /api/auth/forgot-password – TODO' });
});

// POST /api/auth/reset-password/:token – Complete password reset
router.post('/reset-password/:token', (req, res) => {
  res.json({ message: `POST /api/auth/reset-password/${req.params.token} – TODO` });
});

// GET /api/auth/me – Get current authenticated user
router.get('/me', protect, (req, res) => {
  res.json({ message: 'GET /api/auth/me – TODO' });
});

module.exports = router;
