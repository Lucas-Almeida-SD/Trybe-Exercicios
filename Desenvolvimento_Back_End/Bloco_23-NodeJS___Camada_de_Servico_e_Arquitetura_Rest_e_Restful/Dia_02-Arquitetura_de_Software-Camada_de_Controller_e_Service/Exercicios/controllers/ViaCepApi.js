const httpStatusCode = require('../helpers/httpStatusCode');
const viaCepApiService = require('../services/ViaCepApi');

const getDataByCep = async (req, res, next) => {
  const { cep } = req.params;

  const data = await viaCepApiService.getDataByCep(cep);

  if (data.error) return next(data);

  return res.status(httpStatusCode.ok).json(data);
}

const getDataByCep2 = async (req, res, next) => {
  const { cep } = req.params;

  const data = await viaCepApiService.getDataByCep2(cep);

  if (data.error) return next(data);

  return res.status(httpStatusCode.ok).json(data);
}

module.exports = {
  getDataByCep,
  getDataByCep2,
};