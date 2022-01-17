// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const objectList = Object.values(professionalBoard);
function checkId(id) {
  for (const object of objectList) {
    if (object.id === id) {
      return true
    }
  }
  return false;
}

function checkDatail(detail) {
  for (const objet of objectList) {
    if (objet[detail] !== undefined) {
      return true;
    }
  }
  return false;
}

function getInfo(id, detail) {
  for (const object of objectList) {
    if (object.id === id) {
      return `Id: ${id}; ${detail}: ${object[detail]}`;
    }
  }
}

const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  if (checkId(id) === false) {
    return 'ID não identificada';
  } else if (checkDatail(detail) === false) {
    return 'Informação indisponível';
  } else {
    return getInfo(id, detail);
  }
};

module.exports = searchEmployee;