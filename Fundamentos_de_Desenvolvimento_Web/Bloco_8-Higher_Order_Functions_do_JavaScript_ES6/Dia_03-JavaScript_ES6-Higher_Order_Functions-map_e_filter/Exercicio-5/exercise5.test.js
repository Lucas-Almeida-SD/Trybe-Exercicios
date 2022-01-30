const fantasyOrScienceFictionAuthors = require('./exercise5')

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
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

describe('Teste da função fantasyOrScienceFictionAuthors', () => {
  it('Teste 1 - Verificar de a função é definida', () => {
    expect(fantasyOrScienceFictionAuthors).toBeDefined();
  });

  it('Teste 2 - Verificar se retorna um array dado o parâmetro "books"', () => {
    expect(Array.isArray(fantasyOrScienceFictionAuthors(books))).toBe(true);
  })

  it('Teste 3 - Verificar se retorna o array esperado "expectedResult" para o parâmentro "books"', () => {
    expect(fantasyOrScienceFictionAuthors(books)).toEqual(expectedResult);
  })

  it('Teste 4 - Verificar se todos os elementos do array retornado são do tipo "string"', () => {
    expect(fantasyOrScienceFictionAuthors(books).every((element) => typeof element === 'string')).toBe(true);
  });

  it('Teste 5 - Verifique se o array retornado possui seus elementos ordenados alfabeticamente', () => {
    const strings = fantasyOrScienceFictionAuthors(books).map((element) => element.toLowerCase());
    const orderedStrings = strings.map((element) => element);
    orderedStrings.sort();
    expect(orderedStrings.every((element, index) => element === strings[index])).toBe(true);
  })
})