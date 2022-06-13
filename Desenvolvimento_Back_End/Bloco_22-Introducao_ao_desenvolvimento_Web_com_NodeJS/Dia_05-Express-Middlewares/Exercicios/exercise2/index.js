const crypto = require('crypto');
const fs = require('fs/promises');

function validateUser(req, res, next) {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone)
    return res.status(401).json({ message: 'missing fields' });
  
  next();
}

async function generateToken(_req, res) {
  const token = crypto.randomBytes(16).toString('hex');
  await fs.writeFile('./token.json', JSON.stringify({ token }) );

  res.status(200).json({ token });
}

module.exports = {
  validateUser,
  generateToken,
}