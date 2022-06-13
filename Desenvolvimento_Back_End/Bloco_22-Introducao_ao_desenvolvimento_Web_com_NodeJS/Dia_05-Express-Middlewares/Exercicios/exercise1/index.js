const moment = require('moment');
const fs = require('fs/promises');

async function validateToken(req, res, next) {
  const tokenReq  = req.headers.authorization;
  const { token: tokenFile } = JSON.parse(await fs.readFile('./token.json', 'utf8'));
  console.log(tokenFile);

  if (!tokenReq || tokenReq !== tokenFile)
    return res.status(401).json({ message: 'Token inválido!' });
  
  next();
}

function validateProductName(req, res, next) {
  const { productName } = req.body;

  if (!productName) 
    return res.status(400).json({ message: 'O campo productName é obrigatório' });

  if (productName.length < 4) 
    return res.status(400).json({ message: 'O campo productName deve ter pelo menos 4 caracteres' });
  
  next();
}

function validateInfos(req, res, next) {
  const { infos } = req.body;
  if (!infos) return res.status(400).json({ message: 'O campo infos é obrigatório' });

  const { saleDate, warrantyPeriod } = infos;
  if (!saleDate) return res.status(400).json({ message: 'O campo saleDate é obrigatório' });
  if (!warrantyPeriod) return res.status(400).json({ message: 'O campo warrantyPeriod é obrigatório' });

  const validateDate = moment(saleDate, 'DD/MM/YYYY').isValid();
  const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
  if (!validateDate || !dateRegex.test(saleDate))
    return res.status(400).json({ message: 'O campo saleDate não é uma data válida' });

  const WPIsANumber = typeof warrantyPeriod === 'number';
  const WPIsAnIntegerNumber = Number.isInteger(warrantyPeriod);
  const WPBetweenOneAndThree = warrantyPeriod >= 1 && warrantyPeriod <= 3;
  if (!WPIsANumber || !WPIsAnIntegerNumber || !WPBetweenOneAndThree) 
    return res.status(400).json({ message: 'O campo warrantyPeriod precisa estar entre 1 e 3' });

  next();
}

function registerSale(_req, res) {
  res.status(201).json({ message: 'Venda cadastrada com sucesso' })
}

module.exports = {
  validateToken,
  validateProductName,
  validateInfos,
  registerSale,
}
