const readline = require('readline-sync');
const fs = require('fs').promises;

async function exercise7() {
  const fileName = readline.question('Digite o nome do arquivo: ');

  const response = await fs.readFile(`./${fileName}`, 'utf8')
    .then(response => response)
    .catch(() => false);
  
  if (response) {
    const wordToBeReplaced = readline.question('Digite a palavra a ser substituída: ');
    const newWord = readline.question('Digite a nova palavra: ');
    const newResponse = response.replace(new RegExp(wordToBeReplaced, 'g'), newWord);
    const newFile = readline.question('Digite o nome do arquivo de destino: ');
    fs.writeFile(newFile, newResponse)
      .then(() => console.log('Arquivo salvo!'))
      .catch((err) => console.log(err));
  } else {
    console.log('Arquivo inexistente!');
  }
}

exercise7();
