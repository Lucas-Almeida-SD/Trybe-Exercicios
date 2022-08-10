import readline from 'readline-sync';

const valuesInGrams = {
  kg: 1000,
  hg: 100,
  dag: 10,
  g: 1,
  dg: 0.1,
  cg: 0.01,
  mg: 0.001,
}

const findValueInGrams  = (unit: string) => {
  const value =  Object.entries(valuesInGrams)
    .find((e) => e[0] === unit) as [string, number];

  if (!value) throw new Error('Unit does not exists');

  return value[1];
}

const convert = (
  value: number,
  baseUnit: string,
  unitForConversion: string
) => {
  try {
    const currentValue = value * findValueInGrams(baseUnit);
    const newValue = currentValue / findValueInGrams(unitForConversion);
  
    console.log(`${value}${baseUnit} é igual a ${newValue}${unitForConversion}`);
  } catch (err: any) {
    console.log(err.message);
  }
}

const exec = () => {
  const value = readline.questionFloat('Digite o valor: ');
  const baseUnit = readline.question('Digite a unidade base: ');
  const unitForConversion = readline.question('Digite a unidade para conversão: ');

  convert(value, baseUnit, unitForConversion);
}

export default exec;

exec();
