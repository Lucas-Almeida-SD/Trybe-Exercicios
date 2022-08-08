const express = require('express');
const { auth } = require('../middlewares');
const usersController = require('../controllers/users.controller');

const router = express.Router();

router.get('/me', auth, usersController.getUsersMe);

module.exports = router;
