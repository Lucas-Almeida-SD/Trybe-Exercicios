const authorWith3DotsOnName = require('./exercise7');

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

const expectedResult = 'O Senhor dos Anéis';

describe('Teste da função authorWith3DotsOnName', () => {
  it('Teste 1 - Verificar se a função é definida', () => {
    expect(authorWith3DotsOnName).toBeDefined();
  });

  it('Teste 2 - Verificar se retorna uma "string" para o parâmetro "books"', () => {
    expect(typeof authorWith3DotsOnName(books)).toBe('string');
  });

  it('Teste 3 - Verificar se retorna o array esperado "expectedResult" para o parâmentro "books"', () => {
    expect(authorWith3DotsOnName(books)).toBe(expectedResult);
  });

  // it('Teste 4 - Verificar se o')
})