const loginService = require('../services/login.service');

const createLogin = (req, res) => {
  const { username, password } = req.body;

  const login = loginService.createLogin(username, password);

  if (login.error) return res.status(login.error.code).json({ message: login.error.message });

  res.status(201).json({ token: login.token });
};

module.exports = {
  createLogin,
};
