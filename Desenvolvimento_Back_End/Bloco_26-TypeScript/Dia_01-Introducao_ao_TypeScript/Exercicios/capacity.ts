import readline from 'readline-sync';

const valuesInLiters = {
  kl: 1000,
  hl: 100,
  dal: 10,
  l: 1,
  dl: 0.1,
  cl: 0.01,
  ml: 0.001,
}

const findValueInLiters  = (unit: string) => {
  const value =  Object.entries(valuesInLiters)
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
    const currentValue = value * findValueInLiters(baseUnit);
    const newValue = currentValue / findValueInLiters(unitForConversion);
  
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
