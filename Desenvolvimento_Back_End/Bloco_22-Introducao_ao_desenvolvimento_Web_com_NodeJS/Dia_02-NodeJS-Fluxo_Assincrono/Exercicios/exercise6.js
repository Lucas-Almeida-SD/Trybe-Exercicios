const readline = require('readline-sync');
const fs = require('fs').promises;


function getFile() {
  const fileName = readline.question('Digite o nome do arquivo: ');

  fs.readFile(`./${fileName}`, 'utf8')
    .then(response => console.log(response))
    .catch(() => console.log('Arquivo inexistente'));
} 

getFile();