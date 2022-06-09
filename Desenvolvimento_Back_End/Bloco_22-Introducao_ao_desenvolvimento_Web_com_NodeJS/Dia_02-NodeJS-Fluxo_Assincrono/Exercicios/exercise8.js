const readline = require('readline-sync');

const checkFizzBuzz = (number) => {
  if ((number % 3 === 0) && (number % 5 === 0)) { return 'FizzBuzz' }
  if (number % 3 === 0) { return 'Fizz' }
  if (number % 5 === 0) { return 'Buzz' }
  return false;
}

function exercise8() {
  let number = 0;
  while(number <= 0) {
    number = readline.questionInt('Digite um numero maior que 0: ');
  }

  const fizzbuzz = checkFizzBuzz(number);

  return new Promise((resolve, reject) => {
    if (!fizzbuzz) return reject(number);
    resolve(fizzbuzz);
  })
}
