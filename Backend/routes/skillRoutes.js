const express = require('express');
const router = express.Router();

// GET /api/skills – List all available skills (catalog)
router.get('/', (req, res) => {
  res.json({ message: 'GET /api/skills – TODO' });
});

// GET /api/skills/:id – Get skill detail (description + learning resources)
router.get('/:id', (req, res) => {
  res.json({ message: `GET /api/skills/${req.params.id} – TODO` });
});

module.exports = router;
