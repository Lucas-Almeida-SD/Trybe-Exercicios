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
      newOption.innerHTML = brasilianStates[index];
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
  let resultFullName;
  const email = document.querySelector('#email');
  let resultEmail;
  const cpf = document.querySelector('#cpf');
  let resultCPF;
  const address = document.querySelector('#address');
  let resultAddress;

  function checkAddress() {
    if (address.value === '') {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = 'Insira uma endereço válido de até 200 caracteres!'
      divCurriculoGerado.appendChild(paragraph);
      address.focus();
      resultAddress = false;
    } else {
      resultAddress = true;
      // checkAddress();
    }
  }

  function checkCPF() {
    if (cpf.value === '' || cpf.value.length < 11 || cpf.value.length > 11) {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = 'Insira uma CPF válido de 11 caracteres!'
      divCurriculoGerado.appendChild(paragraph);
      cpf.focus();
      resultCPF = false;
    } else {
      resultCPF = true;
      checkAddress();
    }
  }

  function checkEmail() {
    if (email.value === '' || email.value.length > 50 || email.value.indexOf('@') === -1) {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = 'Insira uma email válido de até 50 caracteres!'
      divCurriculoGerado.appendChild(paragraph);
      email.focus();
      resultEmail = false;
    } else {
      resultEmail = true;
      checkCPF();
    }
  }

  function deleteErroMessenge() {
    if (divCurriculoGerado.firstElementChild !== null) {
      divCurriculoGerado.firstElementChild.remove();
    }
  }

  function checkFullName() {
    deleteErroMessenge();
    if (fullName.value === '' || fullName.value.length > 40) {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = 'Insira uma nome válido de até 40 caracteres!'
      divCurriculoGerado.appendChild(paragraph);
      fullName.focus();
      resultFullName = false;
    } else {
      resultFullName = true;
      checkEmail();
    }
  }
  
  btnSubmit.addEventListener('click', checkFullName);