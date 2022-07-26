const sinon = require('sinon');
const { expect } = require('chai');
const BookService = require('../../../src/services/BooksService');
const { Book } = require('../../../src/models');

const {
  allBooks,
  firstBook,
  searchByAuthor,
  createBook,
  updateFirstBook,
} = require('../mocks/dataMock');

describe('Service - Testes da rota GET "/books"', () => {
  describe('quando lê todos os books', () => {
    beforeEach(() => {
      sinon.stub(Book, 'findAll').resolves(allBooks);
    });

    afterEach(() => {
      Book.findAll.restore();
    });

    it('retorna um array de objetos com informações dos books', async () => {
      const books = await BookService.getAll();

      expect(books).to.be.eqls(allBooks);
    });
  });
});

describe('Service - Testes da rota GET "/books?author={author}"', () => {
  describe('quando lê os books pelo "author"', () => {
    beforeEach(() => {
      sinon.stub(Book, 'findAll').resolves(searchByAuthor.books);
    });

    afterEach(() => {
      Book.findAll.restore();
    });

    it('retorna um array de objetos com informações dos books', async () => {
      const books = await BookService.getByAuthor(searchByAuthor.author);

      expect(books).to.be.eqls(searchByAuthor.books);
    });
  });
});

describe('Service - Testes da rota GET "/books/{id}"', () => {
  describe('quando lê o book pelo "id"', () => {
    beforeEach(() => {
      sinon.stub(Book, 'findByPk').resolves(firstBook.book);
    });

    afterEach(() => {
      Book.findByPk.restore();
    });

    it('retorna um objeto com informações do book', async () => {
      const book = await BookService.getById(firstBook.id);

      expect(book).to.be.eqls(firstBook.book);
    });
  });
});

describe('Service - Testes da rota POST "/books"', () => {
  describe('quando adiciona o book', () => {
    beforeEach(() => {
      sinon.stub(Book, 'create').resolves({ id: createBook.id, ...createBook.book});
    });

    afterEach(() => {
      Book.create.restore();
    });

    it('retorna um objeto com informações do book', async () => {
      const book = await BookService.createBook(createBook);

      expect(book).to.be.eqls({ id: createBook.id, ...createBook.book});
    });
  });
});

describe('Service - Testes da rota PUT "/books/{id}"', () => {
  describe('quando atualiza o book pelo "id"', () => {
    beforeEach(() => {
      sinon.stub(Book, 'update').resolves([1]);
    });

    afterEach(() => {
      Book.update.restore();
    });

    it('retorna um array com um elemento de valor "1"', async () => {
      const book = await BookService.updateBook(updateFirstBook.id, updateFirstBook.book);

      expect(book).to.be.eqls([1]);
    });
  });
});

describe('Service - Testes da rota DELETE "/books{id}"', () => {
  describe('quando deleta o book pelo "id"', () => {
    beforeEach(() => {
      sinon.stub(Book, 'destroy').resolves(1);
    });

    afterEach(() => {
      Book.destroy.restore();
    });

    it('retorna valor "1"', async () => {
      const book = await BookService.deleteBook(1);

      expect(book).to.be.equal(1);
    });
  });
});
