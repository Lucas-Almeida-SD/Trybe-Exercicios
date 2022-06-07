const readline = require('readline-sync');

const checkNumber = () => {
  let number = readline.questionInt('Digite um número inteiro maior que zero: ');

  for (; number <= 0;) {
    console.log('Número inválido!');
    number = readline.questionInt('Digite um número inteiro maior que zero: ');
  }

  return number;
}

function fibonacciFunc() {
  const number = checkNumber();
  const fibonacciArray = [];

  let previous = 0;
  let current = 1;
  let next = previous + current;
  for (let index = 0; index < number; index += 1) {
    fibonacciArray.push(current);

    previous = current;
    current = next;
    next = previous + current;
  }

  console.log(`Sequência de Fibonacci de ${number} número${ number > 1 ? 's' : ''}:`);
  console.log(fibonacciArray.join(', '));
}

fibonacciFunc();

module.export = fibonacciFunc;