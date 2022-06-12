const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rescue = require('express-rescue')

const exercise1 = require('./exercise1/index');
const exercise2 = require('./exercise2/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/sales',
  rescue(exercise1.validateToken),
  exercise1.validateProductName,
  exercise1.validateInfos,
  exercise1.registerSale
);

app.post('/signup', exercise2.validateUser, rescue(exercise2.generateToken));

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: `Error: ${err.message}` });
})

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001');
});
