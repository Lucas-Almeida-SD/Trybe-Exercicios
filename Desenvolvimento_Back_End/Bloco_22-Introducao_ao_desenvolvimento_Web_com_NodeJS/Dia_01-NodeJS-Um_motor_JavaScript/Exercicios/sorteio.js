const readline = require('readline-sync');

let playAgain = 'yes';
const answers = ['y', 'yes', 's', 'sim'];

function sorteioFunc() {
  for(; answers.includes(playAgain);) {
    const randomNumber = Math.floor(Math.random() * 11);
  
    const selectNumber = readline.questionInt('Escolha um número de 0 a 10: ');
    
    switch (selectNumber) {
      case randomNumber:
        console.log('Parabéns, número correto!');
        break;
      default:
        console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
        break;
    }
  
    playAgain = readline.question('Jogar novamente? [y/n]: ');
  }
}

sorteioFunc();

module.exports = sorteioFunc;