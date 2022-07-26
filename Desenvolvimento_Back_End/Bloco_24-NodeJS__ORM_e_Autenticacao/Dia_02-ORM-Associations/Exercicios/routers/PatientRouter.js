const express = require('express');
const PatientController = require('../controllers/PatientController');

const router = express.Router();

router.get('/', PatientController.getAll);
router.post('/', PatientController.create);

module.exports = router;
