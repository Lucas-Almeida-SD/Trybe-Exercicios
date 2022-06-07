const readline = require('readline-sync');

function imcFunc() {
  const alrura = readline.questionFloat('Qual sua altura?\n');
  const peso = readline.questionFloat('Qual o seu peso?\n');
  const imc = (peso / (alrura ** 2)).toFixed(2);
  
  console.log(`Seu IMC: ${imc}`);

  switch (true) {
    case (imc < 18.5):
      console.log('Situação: Abaixo do peso (magreza)');
      break;
    case (imc < 25):
      console.log('Situação: Peso normal');
      break;
    case (imc < 30):
      console.log('Situação: Acima do peso (sobrepeso)');
      break;
    case (imc < 35):
      console.log('Situação: Obesidade grau I');
      break;
    case (imc < 40):
      console.log('Situação: Obesidade grau II');
      break;
    default:
      console.log('Situação: Obesidade graus III e IV');
      break;
  }
}

imcFunc();

module.exports = imcFunc;