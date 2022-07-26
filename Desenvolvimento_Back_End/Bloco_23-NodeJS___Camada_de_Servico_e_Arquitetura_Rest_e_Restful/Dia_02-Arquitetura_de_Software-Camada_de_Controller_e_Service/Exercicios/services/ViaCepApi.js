const viaCepApiModel = require('../models/ViaCepApi');
const generateError = require('../helpers/generateError');
const formatCep = require('../helpers/formatCep');

const getDataByCep = async (cep) => {
  const newCep = formatCep(cep);

  const data = await viaCepApiModel.getdataByCep(newCep);

  if (!data) return generateError('notFound', 'CEP não encontrado');

  return data;
}

const getDataByCep2 = async (cep) => {
  const newCep = formatCep(cep);

  const data = await viaCepApiModel.getdataByCep2(newCep);

  if (!data) return generateError('notFound', 'CEP não encontrado');

  return data;
}

module.exports = {
  getDataByCep,
  getDataByCep2,
}