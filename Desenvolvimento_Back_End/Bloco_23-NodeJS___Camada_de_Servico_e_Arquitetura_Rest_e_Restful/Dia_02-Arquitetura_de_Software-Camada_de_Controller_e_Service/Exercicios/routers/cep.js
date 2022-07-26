const express = require('express');
const rescue = require('express-rescue');
const router = express.Router();
const cepController = require('../controllers/Cep');
const viaCepApiController = require('../controllers/ViaCepApi');

router.get(
  '/:cep',
  // rescue(cepController.getDataByCep),
  // rescue(rescue(viaCepApiController.getDataByCep))
  rescue(cepController.getDataByCep2), //Bônus 2
  rescue(viaCepApiController.getDataByCep2),
);

router.post('/', rescue(cepController.addCep));

module.exports = router;