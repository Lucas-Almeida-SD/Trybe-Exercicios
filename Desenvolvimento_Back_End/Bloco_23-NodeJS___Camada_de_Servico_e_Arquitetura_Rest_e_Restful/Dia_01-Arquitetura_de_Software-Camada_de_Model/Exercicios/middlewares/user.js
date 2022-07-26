const User = require('../models/User');

const errorMessage = (message) => ({
  "error": true,
  "message": message,
});

const validate = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!User.validateFirstName(firstName)) {
    return res.status(400).json(errorMessage("O campo \"firstName\" é obrigatório"));
  }

  if (!User.validateLastName(lastName)) {
    return res.status(400).json(errorMessage("O campo \"lastName\" é obrigatório"));
  }

  if (!User.validateEmail(email)) {
    return res.status(400).json(errorMessage("O campo \"email\" é obrigatório"));
  }

  if (!User.validatePassword(password)) {
    const text = 'O campo "password" é obrigatório, deve ser uma string e possuir 6 ou mais caracteres';
    return res.status(400).json(errorMessage(text));
  }

  next();
}

const addUserMiddleware = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const { insertId: id } = await User.addNewUser(firstName, lastName, email, password);

  res.status(201).json({ id, firstName, lastName, email, password})
}

const getUsers = async (_req, res) => {
  const users = await User.getAll();

  res.status(200).json(users);
}

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await User.getById(id);

  if (!user) {
    return res.status(404).json({ "error": true,	"message": "Usuário não encontrado" });
  }

  res.status(200).json(user);
}

const updateUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.getById(id);

  if (!user){
    return res.status(404).json({ "error": true, "message": "Usuário não encontrado"  });
  }

  const { firstName, lastName, email, password } = req.body;

  await User.updateUser(id, firstName, lastName, email, password);

  res.status(200).json({ id, firstName, lastName, email });
}

module.exports = {
  validate,
  addUserMiddleware,
  getUsers,
  getById,
  updateUser,
}