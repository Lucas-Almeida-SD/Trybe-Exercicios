const generateError = require('../helpers/generateError');
const movieModel = require('../models/movieModel');

const getById = async ({ id }) => {
  if (!id || typeof id !== 'number') return generateError(400, 'Valor inválido');

  const movie = await movieModel.getById({ id });

  if (!movie) return generateError(404, 'Filme não encontrado');

  return movie;
};

module.exports = {
  getById,
}