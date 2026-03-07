const express = require('express');
const router = express.Router();

const User = require('../models/User');

// @route   GET /users
// @desc    Retrieve all users from the database
// @access  Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   POST /users
// @desc    Create a new user
// @access  Public
router.post('/', async (req, res) => {
  const { name, email } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
    });

    // Save user to database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    console.error('Error creating user:', err.message);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation error', details: err.message });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;