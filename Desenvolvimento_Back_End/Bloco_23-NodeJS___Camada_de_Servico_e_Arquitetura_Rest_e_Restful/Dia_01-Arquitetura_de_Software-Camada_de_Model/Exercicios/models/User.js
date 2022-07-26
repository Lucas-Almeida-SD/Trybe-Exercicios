const connection = require('./connection');

const validateFirstName = (firstName) => {
  if (!firstName) return false;
  return true;
}

const validateLastName = (lastName) => {
  if (!lastName) return false;
  return true;
}

const validateEmail = (email) => {
  if (!email) return false;
  return true;
}

const validatePassword = (password) => {
  if (!password || typeof password !== 'string' || password.length < 6) return false;
  return true;
}

const addNewUser = async (firstName, lastName, email, password) => {
  const query = `INSERT INTO model_example.users (first_name, last_name, email, password)
    VALUES (?, ?, ? ,?)`;

  const [newUser] = await connection.execute(query, [firstName, lastName, email, password]);

  return newUser;
}

const getAll = async () => {
  const query = `
    SELECT first_name AS firstName, last_name AS lastName, email, password
    FROM model_example.users
  `;

  const [user] = await connection.execute(query);

  return user;
}

const getById = async (id) => {
  const query = `
    SELECT first_name AS firstName, last_name AS lastName, email, password
    FROM model_example.users
    WHERE id = ?
  `;

  const [user] = await connection.execute(query, [id]);

  return user[0];
}

const updateUser = async (id, firstName, lastName, email, password) => {
  const values = [firstName, lastName, email, password, id];

  const query = `
    UPDATE model_example.users
    SET first_name = ?, last_name = ?, email = ?, password = ?
    WHERE id = ?
  `;

  await connection.execute(query, values);
}

module.exports = {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  addNewUser,
  getAll,
  getById,
  updateUser,
};