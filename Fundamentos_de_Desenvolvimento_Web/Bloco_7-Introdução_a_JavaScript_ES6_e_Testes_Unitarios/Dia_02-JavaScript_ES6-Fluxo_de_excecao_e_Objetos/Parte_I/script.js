const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const resultOfSum = document.getElementById('result');

function checkIfValuesIsEmpty(value1, value2) {
  if (value1 === '' || value2 === '') {
    throw new Error ('Campo vazio não permitido!')
  }
}

function checkIfValuesIsNumber(value1, value2) {
  if (isNaN(value1) === true || isNaN(value2) === true) {
    throw new Error('Os valores devem ser numéricos!');
  }
}

function realizeSum() {
  const result = parseInt(value1.value) + parseInt(value2.value);
  resultOfSum.innerText = `Resultado: ${result}`;
}

function sum() {
  try {
    checkIfValuesIsEmpty(value1.value, value2.value);
    checkIfValuesIsNumber(value1.value, value2.value);
    realizeSum();
  } catch (error) {
    throw resultOfSum.innerText = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}


