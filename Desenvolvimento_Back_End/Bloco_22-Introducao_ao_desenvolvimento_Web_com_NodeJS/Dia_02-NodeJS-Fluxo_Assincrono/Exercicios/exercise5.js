const fs = require('fs').promises;

async function exercise5() {
  const stringArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const readFiles = [];
  const writtenFiles = [];
  let finalText;

  for(let index = 0; index < stringArray.length; index += 1) {
    writtenFiles.push(fs.writeFile(`./file${index + 1}.txt`, stringArray[index]));
  }

  await Promise.all(writtenFiles)
    .then(() => console.log('Arquivos salvos'))
    .catch((err) => console.log(err));
  
  for(let index = 0; index < stringArray.length; index += 1) {
    readFiles.push(fs.readFile(`./file${index + 1}.txt`, 'utf8'));
  }

  await Promise.all(readFiles)
    .then((responseArray) => { finalText = responseArray.join(' ')})
    .catch((err) => console.log(err));


  fs.writeFile('./fileAll.txt', finalText)
    .then(() => console.log('Arquivo fileAll.txt salvo'))
    .catch((err) => console.log(err));
}

exercise5();