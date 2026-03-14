const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

// GET /api/jobs – List public jobs (paginated, searchable, filterable)
router.get('/', (req, res) => {
  res.json({ message: 'GET /api/jobs – TODO' });
});

// GET /api/jobs/:id – Get detailed job information (public + employer view)
router.get('/:id', (req, res) => {
  res.json({ message: `GET /api/jobs/${req.params.id} – TODO` });
});

// POST /api/jobs – Create new job posting (employer only)
router.post('/', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: 'POST /api/jobs – TODO' });
});

// PUT /api/jobs/:id – Update job (employer only)
router.put('/:id', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: `PUT /api/jobs/${req.params.id} – TODO` });
});

// PATCH /api/jobs/:id/status – Change job status (open/close/archive)
router.patch('/:id/status', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: `PATCH /api/jobs/${req.params.id}/status – TODO` });
});

// DELETE /api/jobs/:id – Delete job posting (employer only)
router.delete('/:id', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: `DELETE /api/jobs/${req.params.id} – TODO` });
});

// GET /api/jobs/:id/applications – Get applicants list with match scores (employer)
router.get('/:id/applications', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: `GET /api/jobs/${req.params.id}/applications – TODO` });
});

// GET /api/jobs/:id/applications/export – Export applicants to CSV
router.get('/:id/applications/export', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: `GET /api/jobs/${req.params.id}/applications/export – TODO` });
});

module.exports = router;
