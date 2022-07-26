const BooksService = require('../services/BooksService');

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    let books;

    if (author) {
      books = await BooksService.getByAuthor(author);
    } else {
      books = await BooksService.getAll();
    }
  
    res.status(200).json(books);
  } catch(error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
  
    const book = await BooksService.getById(id);
  
    if (!book) return res.status(404).json({ message: 'Book not found' })
  
    res.status(200).json(book);
  } catch(error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const createBook = async (req, res) => {
  try {
    const bookObject = req.body;
  
    const newBook = await BooksService.createBook(bookObject);
  
    res.status(201).json(newBook);
  } catch(error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookObject = req.body;

    const [updatedBook] = await BooksService.updateBook(id, bookObject);

    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({ message: 'Book updated!' });
  } catch(error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await BooksService.deleteBook(id);

    if (!deletedBook) res.status(404).json({ message: 'Book not found' })

    res.status(204).end();
  } catch(error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
