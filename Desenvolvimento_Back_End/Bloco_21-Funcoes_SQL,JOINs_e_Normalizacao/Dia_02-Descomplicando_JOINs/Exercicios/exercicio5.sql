SELECT
	movies.*,
    theater.*
FROM Pixar.Theater AS theater
RIGHT JOIN Pixar.Movies AS movies
ON theater.id = movies.theater_id
ORDER BY theater.name ASC;