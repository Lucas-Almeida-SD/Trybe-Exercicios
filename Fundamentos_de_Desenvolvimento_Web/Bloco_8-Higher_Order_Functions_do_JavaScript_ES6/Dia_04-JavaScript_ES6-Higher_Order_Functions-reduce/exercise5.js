const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  // escreva seu código aqui
  const amountOfA = array.reduce((acc, element) => {
    return acc + (element.toLowerCase().split('a').length - 1); //A parte do (split('a) - 1) foi aprendida no site https://qastack.com.br/programming/2903542/javascript-how-many-times-a-character-occurs-in-a-string
  }, 0);
  return amountOfA;
}

console.log(containsA(names));
