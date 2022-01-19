// QUESTÃO 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderArrayFunction = oddsAndEvens => {
  const orderedArray = [];
  for (; oddsAndEvens.length > 0;) {
    let minNumber = Math.min(...oddsAndEvens);
    orderedArray.push(minNumber);
    oddsAndEvens.splice(oddsAndEvens.indexOf(minNumber), 1);
  }
  return orderedArray
}

const numbers = orderArrayFunction(oddsAndEvens);
console.log(`Os números ${numbers} se encontram ordenados de forma crescente!`);