function encode(string) {
  const vogaisToNumber = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5' };
  let phrase = '';
  for (const letra of string) {
    (vogaisToNumber[letra] !== undefined) ? phrase += vogaisToNumber[letra] :  phrase += letra;
  }
  return phrase;
}

function decode(string) {
  const numberToVogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u' };
  let phrase = '';
  for (const element of string) {
    (numberToVogais[element] !== undefined) ? phrase += numberToVogais[element] : phrase += element;
  }
  return phrase;
}

module.exports = {encode, decode};