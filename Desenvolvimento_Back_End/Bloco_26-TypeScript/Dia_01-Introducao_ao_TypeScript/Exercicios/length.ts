import readline from 'readline-sync';

const valuesInMeters = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
}

const findValueInMeters = (unit: string) => {
  const value =  Object.entries(valuesInMeters)
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
    const currentValue = value * findValueInMeters(baseUnit);
    const newValue = currentValue / findValueInMeters(unitForConversion);

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
