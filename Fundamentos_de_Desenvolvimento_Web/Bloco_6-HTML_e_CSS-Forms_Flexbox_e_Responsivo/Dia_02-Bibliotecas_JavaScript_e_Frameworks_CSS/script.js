//Adição dos estados no input(radio) states
const selectState = document.querySelector('#exampleFormControlSelect1');
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
