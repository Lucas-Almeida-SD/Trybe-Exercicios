const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const pushElement = (acc, elementArray) => {
  elementArray.forEach((element) => acc.push(element));
  return acc;
}

function flatten(array) {
  // escreva seu código aqui
  return array.reduce(pushElement, []);
}

console.log(flatten(arrays));
