// FUNÇÃO 1
const changeX = (string) => {
  const anyString = 'Tryber x aqui!';
  let newString = '';
  for (let index = 0; index < anyString.length; index += 1) {
    (anyString[index] === 'x') ? newString += string : newString += anyString[index];
  }
  return newString;
}
console.log(changeX('Bebeto'));

const mainSkills = ['GIT', 'GITHUB', 'HTML', 'CSS', 'JAVASCRIPT'];


// FUNÇÃO 2
const showStrings = (stringFuncao1) => `${stringFuncao1} Minhas cinco principais habilidades são: ${mainSkills.sort()}`;
console.log(showStrings(changeX('Bebeto')));
