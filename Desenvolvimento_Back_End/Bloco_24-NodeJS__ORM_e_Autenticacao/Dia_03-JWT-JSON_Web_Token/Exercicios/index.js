require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const routers = require('./routers');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/ping', routers.pingRouter);
app.use('/login', routers.loginRouter);
app.use('/users', routers.usersRouter);
app.use('/top-secret', routers.topSecretRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
