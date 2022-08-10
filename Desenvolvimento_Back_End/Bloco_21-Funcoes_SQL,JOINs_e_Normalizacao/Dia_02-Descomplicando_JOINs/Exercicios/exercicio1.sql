SELECT
	movies.title,
    box.domestic_sales,
    box.international_sales
FROM Pixar.Movies AS movies
INNER JOIN Pixar.BoxOffice AS box
ON movies.id = box.movie_id;