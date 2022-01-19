function findNumber(string) {
  const splitedString = string.split(' ');
  let count = 0;
  for (let element of splitedString) {
    if (isNaN(parseInt(element)) === false) {
      count += parseInt(element);
    }
  }
  return count;
}

function hydrate(string) {
  let coposDeAgua = findNumber(string);
  let phrase;
  phrase = (coposDeAgua > 1) ? `${coposDeAgua} copos de água` : `${coposDeAgua} copo de água`;
  return phrase;
}

module.exports = hydrate;