import readline from 'readline-sync';

const valuesInCubicMeters = {
  km3: 10 ** 9,
  hm3: 10 ** 6,
  dam3: 10 ** 3,
  m3: 1,
  dm3: 10 ** -3,
  cm3: 10 ** -6,
  mm3: 10 ** -9,
}

const findValueInCubicMeters  = (unit: string) => {
  const value =  Object.entries(valuesInCubicMeters)
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
    const currentValue = value * findValueInCubicMeters(baseUnit);
    const newValue = currentValue / findValueInCubicMeters(unitForConversion);
  
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