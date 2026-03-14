const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

// GET /api/employers/me – Get company profile
router.get('/me', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: 'GET /api/employers/me – TODO' });
});

// POST /api/employers/me – Create company profile (first time)
router.post('/me', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: 'POST /api/employers/me – TODO' });
});

// PATCH /api/employers/me – Update company profile
router.patch('/me', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: 'PATCH /api/employers/me – TODO' });
});

// GET /api/employers/me/jobs – List all jobs posted by this employer
router.get('/me/jobs', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: 'GET /api/employers/me/jobs – TODO' });
});

module.exports = router;
