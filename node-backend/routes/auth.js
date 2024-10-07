const express = require('express');
const router = express.Router();
const { generateToken } = require('../utils/jwt');
const User = require('../models/user');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = generateToken(user);
  res.json({ token });
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  const token = generateToken(user);
  res.json({ token });
});

module.exports = router;