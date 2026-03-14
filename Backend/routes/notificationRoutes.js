const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// GET /api/notifications – List in-app notifications
router.get('/', protect, (req, res) => {
  res.json({ message: 'GET /api/notifications – TODO' });
});

// PATCH /api/notifications/:id/read – Mark single notification as read
router.patch('/:id/read', protect, (req, res) => {
  res.json({ message: `PATCH /api/notifications/${req.params.id}/read – TODO` });
});

// PATCH /api/notifications/read-all – Mark all notifications as read
router.patch('/read-all', protect, (req, res) => {
  res.json({ message: 'PATCH /api/notifications/read-all – TODO' });
});

module.exports = router;
