const express = require('express');
const middlewares = require('../middlewares/user');

const router = express.Router();

router.get('/', middlewares.getUsers);
router.get('/:id', middlewares.getById);
router.post('/', middlewares.validate, middlewares.addUserMiddleware);
router.put('/:id', middlewares.validate, middlewares.updateUser);

module.exports = router;