const oldBooks = require('./exercise6');

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
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

describe('Teste da função oldBooks', () => {
  const currentYear = 2021;
  it('Teste 1 - Verificar se a função é definida', () => {
    expect(oldBooks).toBeDefined();
  });
  
  it('Teste 2 - Verificar se a função retorna um array dado os parâmetros "books" e "currentYear"', () => {
    expect(Array.isArray(oldBooks(books, currentYear))).toBe(true);
  });

  it('Teste 3 - Verificar se retorna o array esperado "expectedResult" para o parâmentro "books"', () => {
    expect(oldBooks(books, currentYear)).toEqual(expectedResult);
  });

  it('Teste 4 - Verificar se o array possui todos o livros com mais de 60 anos de publicação', () => {
    const over60Years = books.reduce((acc, element) => {
      if (currentYear - element.releaseYear > 60) {acc.push(element.name);}
      return acc;
    }, []);
    expect(over60Years.every((element) => oldBooks(books, currentYear).includes(element))).toBe(true);
    expect(over60Years.length).toBe(oldBooks(books, currentYear).length);
  });
})