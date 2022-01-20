const person = (fullName) => {
  firstName = fullName.split(' ')[0].toLowerCase();
  return { Nome: fullName, email: `${firstName}@trybe.com`};
}

const newEmployees = (newId) => {
  const employees = {
    id1: newId('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newId('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newId('Carla Paiva '), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(person));
