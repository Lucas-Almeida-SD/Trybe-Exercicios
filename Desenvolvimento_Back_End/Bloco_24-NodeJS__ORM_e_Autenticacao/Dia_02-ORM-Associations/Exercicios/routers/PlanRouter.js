const express = require('express');
const PlanController = require('../controllers/PlanController');

const router = express.Router();

router.get('/:id', PlanController.getById);

module.exports = router;
