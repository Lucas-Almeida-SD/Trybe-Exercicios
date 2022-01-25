// escreva sum abaixo
const sum = (...arg) => {
  return arg.reduce((acc, element) => acc + element);
}

console.log(sum(1, 2, 3, 4, 5));
