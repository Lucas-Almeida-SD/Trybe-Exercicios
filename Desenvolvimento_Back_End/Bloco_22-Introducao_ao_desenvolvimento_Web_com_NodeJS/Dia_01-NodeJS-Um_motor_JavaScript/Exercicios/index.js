const readline = require('readline-sync');

const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

const option = readline.questionInt(
  'Selecione uma opcão\n' +
  '1: calcular IMC\n' +
  '2: calcular velocidade\n' +
  '3: sorteio\n' +
  '0: sair\n'
);

switch (option) {
  case 0:
    break;
  case 1:
    imc();
    break;
  case 2:
    velocidade();
    break;
  case 3:
    sorteio();
    break;
  default:
    console.log('Opção inválida!');
    break;
}