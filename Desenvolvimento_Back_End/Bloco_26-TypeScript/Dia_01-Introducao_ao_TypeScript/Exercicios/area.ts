import readline from 'readline-sync';

const valuesInSquareMeters = {
  km2: 10 ** 6,
  hm2: 10 ** 4,
  dam2: 10 ** 2,
  m2: 1,
  dm2: 10 ** -2,
  cm2: 10 ** -4,
  mm2: 10 ** -6,
}

const findValueInSquareMeters  = (unit: string) => {
  const value =  Object.entries(valuesInSquareMeters)
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
    const currentValue = value * findValueInSquareMeters(baseUnit);
    const newValue = currentValue / findValueInSquareMeters(unitForConversion);
  
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
