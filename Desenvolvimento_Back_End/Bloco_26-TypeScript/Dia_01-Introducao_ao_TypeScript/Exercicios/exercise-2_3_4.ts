const readlineSync = require('readline-sync');

enum months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August, 
  September,
  October,
  November,
  December,
}

enum seasons {
  summer = 1,
  autumn,
  winter,
  spring,
};

enum hemispheres {
  north = 1,
  south = 2,
}

type GetMonthAndHemisphere = {
  month: string,
  hemisphere: string,
}

function getMonthAndHemisphere(): GetMonthAndHemisphere {
  const month: number = readlineSync.question(`Escolha o mês:
  (1) - January
  (2) - February
  (3) - March
  (4) - April
  (5) - May
  (6) - June
  (7) - July
  (8) - August 
  (9) - September
  (10) - October
  (11) - November
  (12) - December
  `);

  const hemisphere = readlineSync.question(`Escolha o hemisfério:
  (1) - Hemisfério Norte
  (2) - Hemisfério Sul
  `);

  return { month: months[month], hemisphere: hemispheres[hemisphere] };
}

function getSeasonByNorthHemisphere(month: string) {
  const monthsKeys = Object.values(months) as string[];
  const autumnArray = monthsKeys.slice(8, 12);
  const winterArray = [months[12], ...monthsKeys.slice(0, 3)];
  const springArray = monthsKeys.slice(2, 6);
  const summerArray = monthsKeys.slice(5,9);
  
  let monthSeason = [];

  if(summerArray.includes(month)) monthSeason.push(seasons[1]);
  if(autumnArray.includes(month)) monthSeason.push(seasons[2]);
  if(winterArray.includes(month)) monthSeason.push(seasons[3]);
  if(springArray.includes(month)) monthSeason.push(seasons[4]);
  
  return monthSeason;
}

function getSeasonBySouthHemisphere(month: string): string[] {
  const monthsKeys = Object.values(months) as string[];
  const autumnArray = monthsKeys.slice(2, 6);
  const winterArray = monthsKeys.slice(5,9);
  const springArray = monthsKeys.slice(8, 12);
  const summerArray = [months[12], ...monthsKeys.slice(0, 3)];

  let monthSeason = [];

  if(summerArray.includes(month)) monthSeason.push(seasons[1]);
  if(autumnArray.includes(month)) monthSeason.push(seasons[2]);
  if(winterArray.includes(month)) monthSeason.push(seasons[3]);
  if(springArray.includes(month)) monthSeason.push(seasons[4]);
  
  return monthSeason;
}

function getResult(): string[] {
  const { month, hemisphere } = getMonthAndHemisphere();

  if (hemisphere === 'north') return getSeasonByNorthHemisphere(month);

  return getSeasonBySouthHemisphere(month);
}

console.log(getResult());