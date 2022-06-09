const exercise1 = require('./exercise1');

const numbers = [
  Math.floor(Math.random() * 100 + 1),
  Math.floor(Math.random() * 100 + 1),
  Math.floor(Math.random() * 100 + 1)
];

exercise1(...numbers)
  .then(response => console.log(response))
  .catch(error => console.log(error.message));