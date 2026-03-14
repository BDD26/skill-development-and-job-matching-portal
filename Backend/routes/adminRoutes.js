const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

// GET /api/admin/analytics – Core metrics (applications, offers, placement rate)
router.get('/analytics', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: 'GET /api/admin/analytics – TODO' });
});

// GET /api/admin/analytics/skills – Top in-demand skills
router.get('/analytics/skills', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: 'GET /api/admin/analytics/skills – TODO' });
});

// GET /api/admin/analytics/job-types – Job type distribution
router.get('/analytics/job-types', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: 'GET /api/admin/analytics/job-types – TODO' });
});

// GET /api/admin/employers/pending – Employers awaiting verification
router.get('/employers/pending', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: 'GET /api/admin/employers/pending – TODO' });
});

// PATCH /api/admin/employers/:id/verify
router.patch('/employers/:id/verify', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: `PATCH /api/admin/employers/${req.params.id}/verify – TODO` });
});

// PATCH /api/admin/employers/:id/reject
router.patch('/employers/:id/reject', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: `PATCH /api/admin/employers/${req.params.id}/reject – TODO` });
});

// PATCH /api/admin/employers/:id/suspend
router.patch('/employers/:id/suspend', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: `PATCH /api/admin/employers/${req.params.id}/suspend – TODO` });
});

// GET /api/admin/jobs/pending – Jobs awaiting moderation
router.get('/jobs/pending', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: 'GET /api/admin/jobs/pending – TODO' });
});

// PATCH /api/admin/jobs/:id/approve
router.patch('/jobs/:id/approve', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: `PATCH /api/admin/jobs/${req.params.id}/approve – TODO` });
});

// PATCH /api/admin/jobs/:id/reject
router.patch('/jobs/:id/reject', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: `PATCH /api/admin/jobs/${req.params.id}/reject – TODO` });
});

// GET /api/admin/exports/applications – CSV export (filtered by date)
router.get('/exports/applications', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: 'GET /api/admin/exports/applications – TODO' });
});

// POST /api/admin/skills – Add new skill
router.post('/skills', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: 'POST /api/admin/skills – TODO' });
});

// PATCH /api/admin/skills/:id – Edit skill
router.patch('/skills/:id', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: `PATCH /api/admin/skills/${req.params.id} – TODO` });
});

// DELETE /api/admin/skills/:id – Remove skill
router.delete('/skills/:id', protect, authorizeRoles('admin', 'super_admin'), (req, res) => {
  res.json({ message: `DELETE /api/admin/skills/${req.params.id} – TODO` });
});

module.exports = router;
