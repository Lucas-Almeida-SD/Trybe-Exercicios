// QUESTÃO 2
const longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu';
const checkLongestWord = word => {
  const longestWordSplited = word.split(' ');
  let longestWordFound = longestWordSplited[0];
  for (let index = 1; index < longestWordSplited.length; index += 1) {
    longestWordFound = (longestWordFound.length < longestWordSplited[index].length) ? 
    longestWordSplited[index] : longestWordFound;
  } 
  return longestWordFound;
}

console.log(checkLongestWord(longestWord));