SELECT
	movies.*
FROM Pixar.Movies AS movies

INNER JOIN Pixar.Theater AS theater
ON movies.theater_id = theater.id

LEFT JOIN Pixar.BoxOffice AS box
ON movies.id = box.movie_id

WHERE box.rating > 8;