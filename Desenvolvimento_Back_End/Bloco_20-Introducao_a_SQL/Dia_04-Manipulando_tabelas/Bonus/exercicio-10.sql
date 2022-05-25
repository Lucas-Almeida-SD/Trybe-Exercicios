DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (1, 2, 6, 7);

DELETE FROM Pixar.Movies
WHERE length_minutes < 100;