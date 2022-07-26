const code = require('../helpers/httpStatusCode');

const get = (_req, res) => {
  console.log('passei');
  res.status(code.OK).json({ message: 'pong!' });
}

module.exports = {
  get,
};