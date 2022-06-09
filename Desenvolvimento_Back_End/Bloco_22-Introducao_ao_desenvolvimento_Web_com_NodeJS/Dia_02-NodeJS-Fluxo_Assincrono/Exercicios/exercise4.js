const fs = require('fs').promises;

const getSimpsons = async (file) => {
  const simpsons = await fs.readFile(file, 'utf8');
  return JSON.parse(simpsons);
}

const showSimpsons = async () => {
  const simpsons = await getSimpsons('./simpsons.json');
  simpsons.forEach((character) => { console.log(`${character.id} - ${character.name}`) });
}

const showSimpsonById = async (id) => {
  const simpsons = await getSimpsons('./simpsons.json');

  return new Promise((resolve, reject) => {
    const simpsonById = simpsons.find((character) => character.id === id);
    if (!simpsonById) return reject(new Error('id não encontrado'));
    resolve(simpsonById);
  });
}

const updateSimpsonFile = async () => {
  const simpsons = await getSimpsons('./simpsons.json');

  const newSimpsons = simpsons.filter((character) => ![6, 10].includes(character.id));

  fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons), { flag: 'w' })
    .then(() => console.log('Arquivo salvo'))
    .catch((err) => console.log(err));
}

const onlySimpsonFamily = async () => {
  const simpsons = await getSimpsons('./simpsons.json');

  const simpsonFamily = simpsons.filter((character) => character.id <= 4);

  fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily), { flag: 'w' })
    .then(() => console.log('Arquivo salvo'))
    .catch((err) => console.log(err));
}

const addNelsonMuntz = async () => {
  const simpsons = await getSimpsons('./simpsonFamily.json');

  simpsons.push({
    id: simpsons.length + 1,
    name: "Nelson Muntz",
  });

  fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons), { flag: 'w' })
    .then(() => console.log('Arquivo salvo'))
    .catch((err) => console.log(err));
}

const ReplaceNelsonMuntzToMaggieSimpson = async () => {
  const simpsons = await getSimpsons('./simpsonFamily.json');

  simpsons.map((character) => {
    if (character.name === 'Nelson Muntz') { character.name = 'Maggie Simpson'; }
    return character;
  });

  fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons), { flag: 'w' })
    .then(() => console.log('Arquivo salvo'))
    .catch((err) => console.log(err));
}
