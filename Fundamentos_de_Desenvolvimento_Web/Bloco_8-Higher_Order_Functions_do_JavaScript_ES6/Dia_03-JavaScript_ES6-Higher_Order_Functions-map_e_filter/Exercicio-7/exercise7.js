function authorWith3DotsOnName(array) {
  // escreva seu código aqui
  let findBook = array.find((element) => {
    const authorName = element.author.name;
    const dot = '.';
    return authorName[1] === dot && authorName[4] === dot && authorName[7] === dot;
  });
  findBook = findBook.name;
  return findBook;
}

module.exports = authorWith3DotsOnName;
