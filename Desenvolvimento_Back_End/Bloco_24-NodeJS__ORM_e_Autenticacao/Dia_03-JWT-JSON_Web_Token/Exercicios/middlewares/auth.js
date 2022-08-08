const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: { message: 'Token not found' } });

  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ error: { message: error.message } });
  }
};

module.exports = auth;
