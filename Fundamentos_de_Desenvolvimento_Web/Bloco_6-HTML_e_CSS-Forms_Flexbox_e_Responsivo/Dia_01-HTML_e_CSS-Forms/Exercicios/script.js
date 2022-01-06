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
  'Tocantins (TO)'];

  function addStatesOnSelect() {
    for (let index = 0; index < brasilianStates.length; index += 1) {
      const lengthWord = brasilianStates[index].length;
      const newOption = document.createElement('option');
      newOption.className = 'dataValue optionValue';
      newOption.innerText = brasilianStates[index];
      newOption.value = brasilianStates[index].slice(lengthWord - 3, lengthWord - 1);
      selectState.appendChild(newOption);
    }
  }
  addStatesOnSelect();

  //Verificação da data
  const date = document.querySelector('#date');
  function checkConditionOne(valueDate) {
    let resultOne = false;
    if (valueDate.slice(0, 2) > 0 && valueDate.slice(0, 2) <= 31) {
      resultOne = true;
    }
    return resultOne;
  }

  function checkConditionTwo(valueDate) {
    let resultTwo = false;
    if (valueDate.slice(3, 5) > 0 && valueDate.slice(3, 5) <= 12) {
      resultTwo= true;
    }
    return resultTwo;
  }

  function checkConditionThree(valueDate) {
    let resultThree = false;
    if (valueDate[2] === '/' && valueDate[5] === '/') {
      resultThree = true;
    }
    return resultThree;
  }

  function checkConditionFour(valueDate) {
    let resultFour = false;
    if (valueDate.slice(6, valueDate.length) > 0) {
      resultFour = true;
    }
    return resultFour;
  }


  function checkDate(valueDate) {
    let condition1 = checkConditionOne(valueDate);
    let condition2 = checkConditionTwo(valueDate);
    let condition3 = checkConditionThree(valueDate);
    let condition4 = checkConditionFour(valueDate);
    if (condition1 === false || condition2 === false ||condition3 === false || condition4 === false) {
      window.alert('Data incorreta. Insira uma data válida no formato "dd/mm/aaaa"');
      date.value = '';
    }
  }

  function checkValueDate() {
    const valueDate = date.value;
    if (valueDate.length === 10) {
      checkDate(valueDate);
    } else {
      window.alert('Data incorreta. Insira uma data válida no formato "dd/mm/aaaa"');
      date.value = '';
    }
  }

  date.addEventListener('change', checkValueDate);

  //Evento para ativar o preventDefault no Forms
  const btnSubmit = document.querySelector('#btn-submit');
  const forms = document.querySelector('#formulario');
  function activePreventDefaultAtForm(event) {
    event.preventDefault();
  }
  btnSubmit.addEventListener('click', activePreventDefaultAtForm);

  //Validações requeridas.
  const divCurriculoGerado = document.querySelector('#div-curriculo-gerado');
  const fullName = document.querySelector('#full-name');
  let validation;
  const email = document.querySelector('#email');
  const cpf = document.querySelector('#cpf');
  const address = document.querySelector('#address');
  const town = document.querySelector('#town');
  const cvResume = document.querySelector('#cv-resume');
  const office = document.querySelector('#office');
  const officeDescription = document.querySelector('#officeDescription');

  function generateMessage(message) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = message;
    divCurriculoGerado.appendChild(paragraph);
  }

  function checkDateAfterSubmit() {
    if (date.value === '') {
      generateMessage('Insira uma data válida no formato dd/mm/aaaa !');
      date.focus();
      validation = false;
    } else {
      validation = true;
    }
  }

  function checkOfficeDescription() {
    if (officeDescription.value === '') {
      generateMessage('Insira uma descrição de cargo válida de até 500 caracteres!');
      officeDescription.focus();
      validation = false;
    } else {
      validation = true;
      checkDateAfterSubmit();
    }
  }

  function checkOffice() {
    if (office.value === '') {
      generateMessage('Insira um cargo válido de até 40 caracteres!');
      office.focus();
      validation = false;
    } else {
      validation = true;
      checkOfficeDescription();
    }
  }

  function checkCvResume() {
    if (cvResume.value === '') {
      generateMessage('Insira um resumo válido de até 1000 caracteres!');
      cvResume.focus();
      validation = false;
    } else {
      validation = true;
      checkOffice();
    }
  }

  function checktown() {
    if (town.value === '') {
      generateMessage('Insira uma cidade válido de até 28 caracteres!');
      town.focus();
      validation = false;
    } else {
      validation = true;
      checkCvResume();
    }
  }

  function checkAddress() {
    if (address.value === '') {
      generateMessage('Insira um endereço válido de até 200 caracteres!');
      address.focus();
      validation = false;
    } else {
      validation = true;
      checktown();
    }
  }

  function checkCPF() {
    if (cpf.value === '' || cpf.value.length < 11 || cpf.value.length > 11) {
      generateMessage('Insira uma CPF válido de 11 caracteres!');
      cpf.focus();
      validation = false;
    } else {
      validation = true;
      checkAddress();
    }
  }

  function checkEmail() {
    if (email.value === '' || email.value.length > 50 || email.value.indexOf('@') === -1) {
      generateMessage('Insira uma email válido de até 50 caracteres!');
      email.focus();
      validation = false;
    } else {
      validation = true;
      checkCPF();
    }
  }

  function deleteMessenge() {
    for (; divCurriculoGerado.children.length > 0;) {
      divCurriculoGerado.children[0].remove();
    }
  }

  function checkFullName() {
    deleteMessenge();
    if (fullName.value === '' || fullName.value.length > 40) {
      generateMessage('Insira uma nome válido de até 40 caracteres!');
      fullName.focus();
      validation = false;
    } else {
      validation = true;
      checkEmail();
    }
  }
  
  btnSubmit.addEventListener('click', checkFullName);

  //Gerar o currículo
  let datas;
  let dataValues;
  let dataValuesValidation;

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
    console.log(dataValuesValidation);
    for (let index = 0; index < datas.length; index += 1) {
      generateMessage(datas[index].innerText + dataValuesValidation[index]);
    }
  }

  function generateCV() {
    datas = document.querySelectorAll('.data');
    dataValues = document.querySelectorAll('.dataValue');
    dataValuesValidation = [];
    if (validation === true) {
      generateInfoCv();
    }
  }
  btnSubmit.addEventListener('click', generateCV);
