//QUESTÃO 1
const testingScope = (escopo) => {
  let ifScope;
  if (escopo === true) {
    ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope}. Ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);
