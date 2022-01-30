function fantasyOrScienceFiction(array) {
  // escreva seu código aqui
  return array.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');
}

module.exports = fantasyOrScienceFiction;