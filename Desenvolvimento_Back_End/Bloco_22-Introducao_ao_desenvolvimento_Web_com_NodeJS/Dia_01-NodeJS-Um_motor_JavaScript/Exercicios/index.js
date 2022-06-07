const readline = require('readline-sync');

const option = readline.questionInt(
  'Selecione uma opcão\n' +
  '1: Calcular IMC\n' +
  '2: Calcular velocidade\n' +
  '3: Sorteio\n' +
  '4: Calcular fatorial\n' +
  '5: Sequência de Fibonacci\n' +
  '0: Sair\n'
);

switch (option) {
  case 0:
    break;
  case 1:
    require('./imc');
    break;
  case 2:
    require('./velocidade');
    break;
  case 3:
    require('./sorteio');
    break;
  case 4:
    require('./fatorial');
    break;
  case 5:
    require('./fibonacci');
    break;
  default:
    console.log('Opção inválida!');
    break;
}