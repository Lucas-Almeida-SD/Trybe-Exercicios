const express = require('express');
const PatientSurgeryController = require('../controllers/PatientSurgeryController');

const router = express.Router();

router.get('/', PatientSurgeryController.getAll);

module.exports = router;
