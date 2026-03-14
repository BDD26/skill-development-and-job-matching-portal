const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

// GET /api/students/me/dashboard – Dashboard data (stats, suggested jobs, recent applications)
router.get('/me/dashboard', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: 'GET /api/students/me/dashboard – TODO' });
});

// GET /api/students/me/profile – Get full student profile
router.get('/me/profile', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: 'GET /api/students/me/profile – TODO' });
});

// POST /api/students/me/profile – Create student profile (initial setup)
router.post('/me/profile', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: 'POST /api/students/me/profile – TODO' });
});

// PATCH /api/students/me/profile – Update profile (education, preferences, etc.)
router.patch('/me/profile', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: 'PATCH /api/students/me/profile – TODO' });
});

// POST /api/students/me/profile/skills – Add skill to profile
router.post('/me/profile/skills', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: 'POST /api/students/me/profile/skills – TODO' });
});

// PATCH /api/students/me/profile/skills/:skillId – Update skill level / experience
router.patch('/me/profile/skills/:skillId', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: `PATCH /api/students/me/profile/skills/${req.params.skillId} – TODO` });
});

// DELETE /api/students/me/profile/skills/:skillId – Remove skill
router.delete('/me/profile/skills/:skillId', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: `DELETE /api/students/me/profile/skills/${req.params.skillId} – TODO` });
});

// POST /api/students/me/profile/projects – Add project
router.post('/me/profile/projects', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: 'POST /api/students/me/profile/projects – TODO' });
});

// PATCH /api/students/me/profile/projects/:projId – Update project
router.patch('/me/profile/projects/:projId', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: `PATCH /api/students/me/profile/projects/${req.params.projId} – TODO` });
});

// DELETE /api/students/me/profile/projects/:projId – Remove project
router.delete('/me/profile/projects/:projId', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: `DELETE /api/students/me/profile/projects/${req.params.projId} – TODO` });
});

// POST /api/students/me/profile/certifications – Add certification
router.post('/me/profile/certifications', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: 'POST /api/students/me/profile/certifications – TODO' });
});

// PATCH /api/students/me/profile/certifications/:certId – Update certification
router.patch('/me/profile/certifications/:certId', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: `PATCH /api/students/me/profile/certifications/${req.params.certId} – TODO` });
});

// DELETE /api/students/me/profile/certifications/:certId – Remove certification
router.delete('/me/profile/certifications/:certId', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: `DELETE /api/students/me/profile/certifications/${req.params.certId} – TODO` });
});

// GET /api/students/me/applications – List my applications
router.get('/me/applications', protect, authorizeRoles('student'), (req, res) => {
  res.json({ message: 'GET /api/students/me/applications – TODO' });
});

module.exports = router;
