# Exercícios - Dia 4 - Manipulando tabelas

## Exercícios

Para realizar os exercícios 1 a 7, restaure o banco de dados `Pixar`.

__Exercício 1__: Insira as produções da Pixar na tabela Movies:

- Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.

- Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.

- Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.

- WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

__Exercício 2__: O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela `BoxOffice`.

__Exercício 3__: O nome do diretor do filme "Procurando Nemo" está incorreto, ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o comando `UPDATE`.

__Exercício 4__: O título do filme "Ratatouille" está incorreto na tabela `Movies`. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando `UPDATE`.

__Exercício 5__: Insira as novas classificações abaixo na tabela `BoxOffice`, lembre-se que a coluna `movie_id` é uma foreign key referente a coluna `id` da tabela `Movies`:

- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.

- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.

- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

__Exercício 6__: Exclua da tabela `Movies` o filme "WALL-E".

__Exercício 7__: Exclua da tabela `Movies` todos os filmes dirigidos por "Andrew Staton".

---

## Bônus

    Para realizar os exercícios 8 a 10, faça os exercícios anteriores (1 a 7) e utilize o banco de dados `Pixar`.

__Exercício 8__: Altere a classificação da tabela `BoxOffice` para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

__Exercício 9__: Altere a classificação da tabela `BoxOffice` para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.

__Exercício 10__: Exclua da tabela `Movies` todos os filmes com menos de 100 minutos de duração.