const { Op } = require("sequelize");
const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({ order: [['title', 'asc']] });
  
  return books;
}

const getByAuthor = async (author) => {
  const books = await Book.findAll({ 
    where: { author: { [Op.substring]: author } }, 
    order: [['title', 'asc']]
  });

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const createBook = async (bookObject) => {
  const newBook = await Book.create(bookObject);

  return newBook;
};

const updateBook = async (id, bookObject) => {
  const updatedBook = await Book.update(bookObject, { where: { id } });

  return updatedBook;
};

const deleteBook = async (id) => {
  const deletedBook = await Book.destroy({ where: { id } });

  return deletedBook;
};

module.exports = {
  getAll,
  getByAuthor,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
