const express = require('express');
const cors = require('cors');
const rescue = require('express-rescue');

const pingRouter = require('./routers/ping');
const cepRouter = require('./routers/cep');
const httpStatusCode = require('./helpers/httpStatusCode');
const generateError = require('./helpers/generateError');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/ping', pingRouter);
app.use('/cep', cepRouter);

app.use((err, _req, res, _next) => {
  if (err.error) {
    return res.status(httpStatusCode[err.error.code]).json(err);
  }

  const error = generateError('internalServerError', err.message);
  res.status(httpStatusCode.internalServerError).json(error);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});