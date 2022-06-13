const moment = require("moment");


function validate(date) {
  const validateDate = moment(date, 'DD/MM/YYYY').isValid();
  const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
  return validateDate && dateRegex.test(date);
}

console.log(validate('20.02.5000'));