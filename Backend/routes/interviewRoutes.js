const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

// GET /api/interviews – List scheduled interviews
router.get('/', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: 'GET /api/interviews – TODO' });
});

// POST /api/interviews – Schedule simulated interview
router.post('/', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: 'POST /api/interviews – TODO' });
});

// PATCH /api/interviews/:id – Update / reschedule interview
router.patch('/:id', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: `PATCH /api/interviews/${req.params.id} – TODO` });
});

// DELETE /api/interviews/:id – Cancel interview
router.delete('/:id', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: `DELETE /api/interviews/${req.params.id} – TODO` });
});

module.exports = router;
