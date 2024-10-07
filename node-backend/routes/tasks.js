const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');

router.get('/', authenticate, async (req, res) => {
  // protected route
  const tasks = await Task.find({ userId: req.user.userId });
  res.json(tasks);
});

module.exports = router;