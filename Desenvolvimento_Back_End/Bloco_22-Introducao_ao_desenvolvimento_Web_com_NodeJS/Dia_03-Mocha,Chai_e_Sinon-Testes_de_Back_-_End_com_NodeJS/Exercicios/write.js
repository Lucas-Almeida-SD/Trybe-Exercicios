const fs = require('fs').promises;

async function write(fileName, content) {
  try{
    await fs.writeFile(`./${fileName}`, content);
    return 'ok'
  } catch(error) {
    return 'Não foi possível salvar o arquivo!';
  }
}

module.exports = write;