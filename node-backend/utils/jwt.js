const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = { userId: user._id, email: user.email };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
};

module.exports = { generateToken };