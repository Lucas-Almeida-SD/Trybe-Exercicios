const sequelize = require("sequelize");

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'books',
  }
  );

  return Book;
};

module.exports = Book;