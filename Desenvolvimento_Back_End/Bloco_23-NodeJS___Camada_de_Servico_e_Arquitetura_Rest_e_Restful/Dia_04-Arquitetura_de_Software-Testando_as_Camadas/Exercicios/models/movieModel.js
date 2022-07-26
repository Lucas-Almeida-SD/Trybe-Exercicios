const connection = require('../helpers/connection');

const getById = async ({ id }) => {
  const query = `
    SELECT id, title, directed_by AS directedBy, release_year AS releaseYear
    FROM my_movies.movies
    WHERE id = ?
    `
  
  const [movie] = await connection.execute(query, [id]);

  return movie[0];
}

module.exports = {
  getById,
};