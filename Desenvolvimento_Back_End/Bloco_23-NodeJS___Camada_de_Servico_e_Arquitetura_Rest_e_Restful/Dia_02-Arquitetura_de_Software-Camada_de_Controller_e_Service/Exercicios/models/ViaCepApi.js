const axios = require('axios');
const cepModel = require('./Cep');

const getdataByCep = async (cep) => {
  const request = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  if (request.data.erro) return null;

  const { logradouro, bairro, localidade, uf } = request.data;

  await cepModel.addCep(cep, logradouro, bairro, localidade, uf);

  return { cep, logradouro, bairro, localidade, uf };
};

const getdataByCep2 = async (cep) => {
  const request = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  
  if (request.data.erro) return null;
  
  const { logradouro, bairro, localidade, uf } = request.data;

  let bairroInfo = await cepModel.getBairro2(bairro, localidade, uf);

  if (!bairroInfo) {
    [bairroInfo] = await cepModel.addBairros2(bairro, localidade, uf);
  }

  await cepModel.addCep2(cep, logradouro, bairroInfo.id ?? bairroInfo.insertId);

  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
  getdataByCep,
  getdataByCep2,
};