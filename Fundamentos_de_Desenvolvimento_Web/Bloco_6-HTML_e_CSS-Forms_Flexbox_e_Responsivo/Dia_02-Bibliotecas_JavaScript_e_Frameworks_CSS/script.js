//Adição dos estados no input(radio) states
const selectState = document.querySelector('#state');
const brasilianStates = [
  'Acre (AC)',
  'Alagoas (AL)',
  'Amapá (AP)',
  'Amazonas (AM)',
  'Bahia (BA)',
  'Ceará (CE)',
  'Distrito Federal (DF)',
  'Espírito Santo (ES)',
  'Goiás (GO)',
  'Maranhão (MA)',
  'Mato Grosso (MT)',
  'Mato Grosso do Sul (MS)',
  'Minas Gerais (MG)',
  'Pará (PA)',
  'Paraíba (PB)',
  'Paraná (PR)',
  'Pernambuco (PE)',
  'Piauí (PI)',
  'Rio de Janeiro (RJ)',
  'Rio Grande do Norte (RN)',
  'Rio Grande do Sul (RS)',
  'Rondônia (RO)',
  'Roraima (RR)',
  'Santa Catarina (SC)',
  'São Paulo (SP)',
  'Sergipe (SE)',
  'Tocantins (TO)'
];

function addStatesOnSelect() {
  for (let index = 0; index < brasilianStates.length; index += 1) {
    const lengthWord = brasilianStates[index].length;
    const newOption = document.createElement('option');
    newOption.className = 'dataValue optionValue';
    newOption.innerHTML = brasilianStates[index];
    newOption.value = brasilianStates[index].slice(lengthWord - 3, lengthWord - 1);
    selectState.appendChild(newOption);
  }
}
addStatesOnSelect();

// Formata o calendário
const picker = document.querySelector('#date').DatePickerX;
picker.init({
  format: 'dd/mm/yyyy',
  maxDate: Date,
  weekDayLabels: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
  mondayFirst: false,
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  todayButtonLabel: 'Hoje',
  clearButtonLabel: 'Limpar',
  titleFormatDay: 'dd - MM - yyyy'
});

// Validação do Form
const  validate  =  new  window.JustValidate('#form');
validate.addField('#full-name', [
  {
    rule: 'required',
    errorMessage: 'Preencha este campo!',
  },
]);

validate.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Preencha este campo!',
  },
  {
    rule: 'email',
    errorMessage: 'Insira um email válido!',
  }
]); 

validate.addField('#cpf', [
  {
    rule: 'required',
    errorMessage: 'Preencha este campo!!',
  },
  {
    rule: 'number',
    errorMessage: 'Insira um cpf válido!',
  },
  {
    rule: 'minLength',
    value: 11,
    errorMessage: 'Insira um cpf válido!',
  }
]); 

validate.addField('#address', [
  {
    rule: 'required',
    errorMessage: 'Preencha este campo!',
  }
]);

validate.addField('#town', [
  {
    rule: 'required',
    errorMessage: 'Preencha este campo!',
  }
]);

validate.addField('#cv-resume', [
  {
    rule: 'required',
    errorMessage: 'Preencha este campo!',
  }
]);

validate.addField('#office', [
  {
    rule: 'required',
    errorMessage: 'Preencha este campo!',
  }
]);

validate.addField('#officeDescription', [
  {
    rule: 'required',
    errorMessage: 'Preencha este campo!'
  }
]);

validate.addField('#date', [
  {
    rule: 'required',
    errorMessage: 'Preencha este campo!'
  }
]);

// Gerar o CV
const btnSubmit = document.querySelector('#btn-submit');
const divCurriculoGerado = document.querySelector('#div-curriculo-gerado');
let datas;
let dataValues;
let dataValuesValidation;

function generateMessage(message) {
  const paragraph = document.createElement('p');
  paragraph.className = 'paragraph';
  paragraph.innerHTML = message;
  divCurriculoGerado.appendChild(paragraph);
}

function deleteMessenge() {
  for (; divCurriculoGerado.children.length > 0;) {
    divCurriculoGerado.children[0].remove();
  }
}

function checkDataValues(index) {
  if (dataValues[index].classList.contains('textValue') === true) {
    dataValuesValidation.push(dataValues[index].value);
  } else if (dataValues[index].classList.contains('optionValue') === true) {
    if (dataValues[index].selected === true) {
      dataValuesValidation.push(dataValues[index].value);
    }
  } else if (dataValues[index].classList.contains('radioValue') === true) {
    if (dataValues[index].checked === true) {
      dataValuesValidation.push(dataValues[index].value);
    }
  }
}

function generateInfoCv() {
  for (let index = 0; index < dataValues.length; index += 1) {
     checkDataValues(index);
  }
  for (let index = 0; index < datas.length; index += 1) {
    if(dataValuesValidation[index] === undefined) {
      generateMessage(datas[index].innerText);
    } else {
      generateMessage(datas[index].innerText + ' ' + dataValuesValidation[index]);
    }
  }
}

function generateCV() {
  deleteMessenge();
  datas = document.querySelectorAll('.data');
  dataValues = document.querySelectorAll('.dataValue');
  dataValuesValidation = [];
  const titleCVGenerated = document.createElement('h2');
  titleCVGenerated.id = 'title-CV';
  titleCVGenerated.innerText = 'Curriculum Vitae'
  divCurriculoGerado.appendChild(titleCVGenerated);
  generateInfoCv();
  console.log(dataValuesValidation);
}
btnSubmit.addEventListener('click', generateCV);

// Deletar o CV gerado quando clicar em 'Limpar Formulário'
const btnReset = document.querySelector('#btn-reset');
  function clearCVgenerated() {
    deleteMessenge();
  }
  btnReset.addEventListener('click', clearCVgenerated);