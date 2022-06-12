const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Exercício 1
app.get('/ping', (req, res) => {
  // Bônus 1
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token inválido!' });
  //

  res.status(200).json({ message: 'pong' });
});
//

// Exercício 2
app.post('/hello', (req, res) => {
  // Bônus 1
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token inválido!' });
  //

  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!` });
});
//

// Exercício 3
app.post('/greetings', (req, res) => {
  // Bônus 1
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token inválido!' });
  //

  const { name, age } = req.body;
  if (age <= 17) return res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}!` })
});
//

// Exercício 4
app.put('/users/:name/:age', (req, res) => {
  // Bônus 1
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token inválido!' });
  //

  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});
//

// Exercício 6
app.get('/simpsons', (req, res) => {
  // Bônus 1
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token inválido!' });
  //

  const simpsons = JSON.parse(getFile('./simpsons.json'));
  if (!simpsons) return res.status(500).send('Internal Server Error');

  res.status(200).json(simpsons);
});
//

// Exercício 7
app.get('/simpsons/:id', (req, res) => {
  // Bônus 1
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token inválido!' });
  //

  const simpsons = JSON.parse(getFile('./simpsons.json'));
  console.log(simpsons);
  if (!simpsons) return res.status(500).send('Internal Server Error');

  const { id } = req.params;
  const character = simpsons.find((e) => e.id === id);
  if (!character) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(character);
});
//

// Exercício 8
app.post('/simpsons', (req, res) => {
  // Bônus 1
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token inválido!' });
  //

  const simpsons = JSON.parse(getFile('./simpsons.json'));
  console.log(simpsons);
  if (!simpsons) return res.status(500).send('Internal Server Error');

  const { id, name } = req.body;
  const character = simpsons.find((e) => e.id === id);
  if (character) return res.status(409).json({ message: 'id already exists' });

  simpsons.push({ id, name });
  fs.writeFileSync('./simpsons.json', JSON.stringify(simpsons));

  res.status(204).end();
})
//

// Bônus 2 
app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone)
    return res.status(401).json({ message: 'missing fields' });

    const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
})
//

app.all('*', (req, res) => {
  const { path } = req;
  res.status(404).json({ message: 'Not Found' });
})

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001');
});

function getFile(name) {
  try {
    const file = fs.readFileSync(name, 'utf8');
    return file;
  } catch(error) {
    return false;
  }
}