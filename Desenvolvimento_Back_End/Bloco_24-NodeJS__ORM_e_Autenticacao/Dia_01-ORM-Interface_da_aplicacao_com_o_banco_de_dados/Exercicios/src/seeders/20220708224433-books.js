'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', [
      {
        title: 'Dom Quixote',
        author: 'Miguel de Cervantes',
        page_quantity: 112,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Guerra e Paz',
        author: 'Liev Tolstói',
        page_quantity: 236,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'A Montanha Mágica',
        author: 'Thomas Mann',
        page_quantity: 247,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Cem Anos de Solidão',
        author: 'Gabriel García Márquez',
        page_quantity: 395,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Ulisses',
        author: 'James Joyce',
        page_quantity: 170,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {
      underscored: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {});
  }
};
