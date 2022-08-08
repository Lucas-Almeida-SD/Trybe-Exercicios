const express = require('express');
const { auth, admin } = require('../middlewares');
const topSecretController = require('../controllers/topSecret.controller');

const router = express.Router();

router.get('/', auth, admin, topSecretController.getTopSecret);

module.exports = router;
