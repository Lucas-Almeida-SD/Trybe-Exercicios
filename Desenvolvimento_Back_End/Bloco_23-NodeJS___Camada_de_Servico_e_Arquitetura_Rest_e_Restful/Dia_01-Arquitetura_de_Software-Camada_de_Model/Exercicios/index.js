const express = require('express');
const cors = require('cors');
const routerUser = require('./routers/user');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', routerUser);

app.listen(3000, () => {
  console.log('Escutando na porta 3000');
});
