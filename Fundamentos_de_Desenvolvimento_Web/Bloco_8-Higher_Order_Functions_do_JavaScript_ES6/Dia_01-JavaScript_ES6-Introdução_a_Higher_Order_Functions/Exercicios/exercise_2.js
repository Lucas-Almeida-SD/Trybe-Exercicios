const checkNumber = (chosenNumber, drawnNumber) => {
  return (chosenNumber === drawnNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
}

const prizeDraw = (chosenNumber, func) => {
  const drawnNumber = Math.ceil(Math.random() * 5);
  return func(chosenNumber, drawnNumber);
}

console.log(prizeDraw(3, checkNumber));
