const getError = (numberArray) => {
  const [n1, n2, n3] = numberArray;
  if (numberArray.some((n) => typeof n !== 'number')) return 'Informe apenas números';
  if((n1 + n2) * n3 < 50) return 'Valor muito baixo';
  return false;
}

function exercise1(n1, n2, n3) {
  const error = getError([n1, n2, n3]);
  return new Promise((resolve, reject) => {
    if(error) {
      return reject(new Error(error));
    }
    resolve((n1 + n2) * n3);
  });
}

module.exports = exercise1;
