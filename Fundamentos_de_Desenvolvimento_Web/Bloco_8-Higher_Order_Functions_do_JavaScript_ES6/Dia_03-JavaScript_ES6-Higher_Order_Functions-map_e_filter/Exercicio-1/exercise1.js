function formatedBookNames(array) {
  // escreva seu código aqui
  return array.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
}

module.exports = formatedBookNames;