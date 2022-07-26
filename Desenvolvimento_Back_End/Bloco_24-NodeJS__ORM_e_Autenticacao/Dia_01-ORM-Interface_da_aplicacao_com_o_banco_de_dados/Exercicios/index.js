const express = require('express');
const app = express();
const BooksRouter = require('./src/routers/booksRouter');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', BooksRouter);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}!`);
})