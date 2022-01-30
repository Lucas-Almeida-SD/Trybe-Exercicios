const oldBooksOrdered = require('./exercise4');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

describe('Teste da função oldBooksOrdered', () => {
  it('Teste 1 - Verificar se a função é definida', () => {
    expect(oldBooksOrdered).toBeDefined();
  });

  it('Teste 2 - Verificar se retorna um array', () => {
    expect(Array.isArray(oldBooksOrdered(books, 2021))).toBe(true);
  });

  it('Teste 3 - Verificar se retorna o array esperado "expectedResult" para os parâmentros "books" e ""2021', () => {
    expect(oldBooksOrdered(books, 2021)).toEqual(expectedResult);
  })

  it('Teste 4 - Verificar se retorna um array de livros com mais de 60 anos e se estão ordenados pelos anos de forma crescente', () => {
    const yearsOfBooks = oldBooksOrdered(books, 2021).map((element) => 2021 - element.releaseYear);
    const releaseYears = oldBooksOrdered(books, 2021).map((element) => element.releaseYear);
    releaseYears.sort((a, b) => a - b);
    expect(yearsOfBooks.every((element) => element > 60)).toBe(true);
    expect(oldBooksOrdered(books, 2021).every((element, index) => element.releaseYear === releaseYears[index])).toBe(true);
  })
})