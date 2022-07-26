const express = require('express');
const SurgeryController = require('../controllers/SurgeryController');

const router = express.Router();

router.get('/:doctor', SurgeryController.getByDoctor);

module.exports = router;
