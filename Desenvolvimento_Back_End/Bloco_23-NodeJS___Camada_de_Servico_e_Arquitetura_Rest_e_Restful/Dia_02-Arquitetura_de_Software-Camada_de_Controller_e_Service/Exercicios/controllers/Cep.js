const cepService = require('../services/Cep');
const httpStatusCode = require('../helpers/httpStatusCode');

const getDataByCep = async (req, res, next) => {
  const { cep } = req.params;
  
  const data = await cepService.getDataByCep(cep);

  if (!data) return next();

  res.status(httpStatusCode.ok).json(data);
};

const getDataByCep2 = async (req, res, next) => {
  const { cep } = req.params;
  
  const data = await cepService.getDataByCep2(cep);

  if (!data) return next();

  res.status(httpStatusCode.ok).json(data);
};

const addCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const newCep = await cepService.addCep(cep, logradouro, bairro, localidade, uf);

  if (newCep.error) return next(newCep);

  res.status(httpStatusCode.created).json(newCep);
}

module.exports = {
  getDataByCep,
  getDataByCep2,
  addCep,
};