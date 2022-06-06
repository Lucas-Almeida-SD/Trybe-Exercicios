const readline = require('readline-sync');

function velocidadeFunc() {
  const distancia = readline.questionInt('Qual a distância (em metros)?\n');
  const tempo = readline.questionInt('Qual o tempo (em segundos)?\n');
  
  console.log(`A velocidade média é de ${(distancia / tempo).toFixed(2)} m/s.`);
}

module.exports = velocidadeFunc;