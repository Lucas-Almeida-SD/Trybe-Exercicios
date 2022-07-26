const allBooks = [
  {
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    pageQuantity: 112,
    publisher: 'ASD',
  },
  {
    title: 'Guerra e Paz',
    author: 'Liev Tolstói',
    pageQuantity: 236,
    publisher: 'FGH',
  },
  {
    title: 'A Montanha Mágica',
    author: 'Thomas Mann',
    pageQuantity: 247,
    publisher: 'JKL',
  },
  {
    title: 'Cem Anos de Solidão',
    author: 'Gabriel García Márquez',
    pageQuantity: 395,
    publisher: 'ZXC',
  },
  {
    title: 'Ulisses',
    author: 'James Joyce',
    pageQuantity: 170,
    publisher: 'VBN',
  },
];

const firstBook = {
  id: 1,
  book: {
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    pageQuantity: 112,
    publisher: 'ASD',
  }
}

const searchByAuthor = {
  author: 'el',
  books: [
    {
      title: 'Cem Anos de Solidão',
      author: 'Gabriel García Márquez',
      pageQuantity: 395,
      publisher: 'ZXC',
    },
    {
      title: 'Dom Quixote',
      author: ' Miguel de Cervantes',
      pageQuantity: 112,
      publisher: 'ASD',
    },
  ]
};

const createBook = {
  id: 6,
  book: {
    title: 'Jogos Vorazes',
    author: 'Suzanne Collins',
    pageQuantity: 321,
    publisher: 'LKSE'
  }
}

const updateFirstBook = {
  id: 1,
  book: {
    title: 'Dom Quixote - Segunda Parte',
    author: 'Miguel de Oliveira',
    pageQuantity: 187,
    publisher: 'ASD',
  }
}

module.exports = {
  allBooks,
  firstBook,
  searchByAuthor,
  createBook,
  updateFirstBook,
};
