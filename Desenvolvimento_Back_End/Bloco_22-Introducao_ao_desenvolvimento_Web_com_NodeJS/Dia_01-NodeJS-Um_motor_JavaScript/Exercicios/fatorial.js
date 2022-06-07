const readline = require('readline-sync');

const checkNumber = () => {
  let number = readline.questionInt('Digite um número inteiro maior que zero: ');

  for (; number <= 0;) {
    console.log('Número inválido!');
    number = readline.questionInt('Digite um número inteiro maior que zero: ');
  }

  return number;
}

function fatorialFunc() {
  const number = checkNumber();
  let fatorial = number;
  for (let index = number - 1; index > 0; index -= 1) {
    fatorial = fatorial * index;
  }

  console.log(`${number}! = ${fatorial}`);
}

fatorialFunc();

module.exports = fatorialFunc;
