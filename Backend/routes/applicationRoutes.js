const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

// GET /api/applications – (student) List my applications (alias entry point)
// Note: Listing is under /api/students/me/applications; these routes handle individual items

// POST /api/applications – Apply to a job (student selects resume version)
router.post('/', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: 'POST /api/applications – TODO' });
});

// GET /api/applications/:id – Get application detail & status
router.get('/:id', protect, (req, res) => {
  res.json({ message: `GET /api/applications/${req.params.id} – TODO` });
});

// DELETE /api/applications/:id – Withdraw application (if not shortlisted)
router.delete('/:id', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: `DELETE /api/applications/${req.params.id} – TODO` });
});

// PATCH /api/applications/:id/status – Shortlist / reject applicant (employer)
router.patch('/:id/status', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: `PATCH /api/applications/${req.params.id}/status – TODO` });
});

// POST /api/applications/:id/notes – Add private note (employer)
router.post('/:id/notes', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: `POST /api/applications/${req.params.id}/notes – TODO` });
});

// GET /api/applications/:id/resume – Download/view applicant resume (employer)
router.get('/:id/resume', protect, authorizeRoles('employer'), (req, res) => {
  res.json({ message: `GET /api/applications/${req.params.id}/resume – TODO` });
});

module.exports = router;
