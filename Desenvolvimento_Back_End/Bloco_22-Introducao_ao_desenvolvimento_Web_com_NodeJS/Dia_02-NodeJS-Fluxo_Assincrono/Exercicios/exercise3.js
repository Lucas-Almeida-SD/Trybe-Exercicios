const exercise1 = require('./exercise1');

const numbers = [
  Math.floor(Math.random() * 100 + 1),
  Math.floor(Math.random() * 100 + 1),
  Math.floor(Math.random() * 100 + 1)
];

async function exercise3() {
  try {
    const response = await exercise1(...numbers);
    console.log(response);
  } catch (error) {
    console.log(error.message)
  }
}

exercise3();