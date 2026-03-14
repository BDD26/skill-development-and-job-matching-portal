const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// GET /api/users/me – Get own user profile & role
router.get('/me', protect, (req, res) => {
  res.json({ message: 'GET /api/users/me – TODO' });
});

// PATCH /api/users/me – Update basic user info
router.patch('/me', protect, (req, res) => {
  res.json({ message: 'PATCH /api/users/me – TODO' });
});

// DELETE /api/users/me – Delete own account
router.delete('/me', protect, (req, res) => {
  res.json({ message: 'DELETE /api/users/me – TODO' });
});

module.exports = router;
