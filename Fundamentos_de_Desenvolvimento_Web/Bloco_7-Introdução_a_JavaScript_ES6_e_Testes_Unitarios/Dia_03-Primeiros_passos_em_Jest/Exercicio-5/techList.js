function convertToUpperCase(array) {
  const upperCaseArray = [];
  for (const element of array) {
    upperCaseArray.push(element.toUpperCase());
  }
  return upperCaseArray;
}

function orderTheWords(array, upperCaseArray) {
  const upperCaseArrayWithoutSort = [];
  for (const element of upperCaseArray) {
    upperCaseArrayWithoutSort.push(element);
  }
  const sortedUpperCaseArray = upperCaseArray.sort();
  const requiredArray = [];
  for (const element of sortedUpperCaseArray) {
    const indexElement = upperCaseArrayWithoutSort.indexOf(element);
    requiredArray.push(array[indexElement]);
  }
  return requiredArray;
}

function techList(array, string) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  const upperCaseArray = convertToUpperCase(array);
  const orderArray = orderTheWords(array, upperCaseArray);
  const techListArray = [];
  for (const element of orderArray) {
    techListArray.push({tech: element, name: string});
  }
  return techListArray;
}

module.exports = techList;