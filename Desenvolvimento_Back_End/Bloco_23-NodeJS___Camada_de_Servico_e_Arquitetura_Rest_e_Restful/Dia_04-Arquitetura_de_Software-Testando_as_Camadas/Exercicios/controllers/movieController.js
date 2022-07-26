const movieService = require('../services/movieService');

const getById = async (req, res) => {
  const { id } = req.body;

  const movie = await movieService.getById({ id });

  if (movie.error) 
    return res.status(movie.error.code).json({ message: movie.error.message });
  
  res.status(200).json(movie);
};

module.exports = {
  getById,
}