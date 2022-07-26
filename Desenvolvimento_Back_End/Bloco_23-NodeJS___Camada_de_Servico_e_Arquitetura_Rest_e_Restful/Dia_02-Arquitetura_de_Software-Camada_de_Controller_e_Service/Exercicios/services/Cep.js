const cepModel = require('../models/Cep');
const generateError = require('../helpers/generateError');
const Joi = require('joi');

const formatCep = require('../helpers/formatCep');

const isCepValid = (cep) => {
  return /\d{5}-?\d{3}/.test(cep);
}

const validateAllFields = (cep, logradouro, bairro, localidade, uf) => {
  const validate = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({ cep, logradouro, bairro, localidade, uf });

  return validate;
}

const getDataByCep = async (cep) => {
  if (!isCepValid(cep)) return generateError('invalidData', 'CEP inválido');

  const data = await cepModel.getDataByCep(formatCep(cep));

  return data;
}

const getDataByCep2 = async (cep) => {
  if (!isCepValid(cep)) return generateError('invalidData', 'CEP inválido');

  const data = await cepModel.getDataByCep2(formatCep(cep));

  return data;
}

const addCep = async (cep, logradouro, bairro, localidade, uf) => {
  const validate = validateAllFields(cep, logradouro, bairro, localidade, uf);

  if (validate.error) return generateError('invalidData', validate.error);

  if (!isCepValid(cep)) return generateError('invalidData', 'CEP inválido');
  
  const newCep = formatCep(cep);
  const cepAlreadyExists = await cepModel.getDataByCep(newCep);

  if (cepAlreadyExists) return generateError('alreadyExists', 'CEP já existente');

  await cepModel.addCep(newCep, logradouro, bairro, localidade, uf);

  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = {
  getDataByCep,
  getDataByCep2,
  addCep,
}