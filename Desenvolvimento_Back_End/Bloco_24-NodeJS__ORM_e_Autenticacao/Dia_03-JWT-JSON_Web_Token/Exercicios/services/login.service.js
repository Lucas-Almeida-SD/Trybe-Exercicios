const Joi = require('joi');
const jwt = require('jsonwebtoken');
const generateError = require('../helpers/generateError');
require('dotenv').config();

const validateUser = (username, password) => {
  const { error } = Joi.object({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().min(5).required(),
  }).validate({ username, password });

  if (error) return generateError(400, error.details[0].message);

  return {};
};

const isAdmin = (username, password) => {
  const adminUsername = process.env.JWT_ADMIN_USERNAME;
  const adminPassword = process.env.JWT_ADMIN_PASSWORD;

  if (username === adminUsername && password === adminPassword) {
    return true;
  }
  
  return false;
};

const generateToken = (username, password) => {
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const data = { username, admin: isAdmin(username, password) };

  const secret = process.env.JWT_SECRET;

  const token = jwt.sign({ data }, secret, jwtConfig);

  return token;
};

function createLogin(username, password) {
  const validate = validateUser(username, password);

  if (validate.error) return { error: validate.error };

  return { token: generateToken(username, password) };
}

module.exports = {
  createLogin,
};