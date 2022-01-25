const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const months = (spring, summer, autumn, winter) => {
  const months = [...winter.slice(1), ...spring, ...summer, ...autumn, winter[0]];
  return months;
};

const { spring, summer, autumn, winter } = yearSeasons;

console.log(months(spring, summer, autumn, winter));

const products = [
  {
    name: 'laptop',
    price: 1000,
    id: 3,
  },
  {
    name: 'desktop',
    price: 1500,
    id: 2,
  },
  {
    name: 'phone',
    price: 500,
    id: 1,
  },
];

console.log(products.sort());
