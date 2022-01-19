// QUESTÃO 1
const fatorialFunction = n => {
  let fatorialNumber = 1;
  for (let index = n; index > 0; index -= 1) {
    fatorialNumber *= index;
  }
  return fatorialNumber;
}

const checkFatorial = n => (n === 0) ? 0 : fatorialFunction(n);
console.log(checkFatorial(7));