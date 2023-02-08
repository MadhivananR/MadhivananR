const express = require('express');
const userController = require('../controllers/userControllers');

const router = express.Router();

router.post('/users', userController.create);

router.get('/users', userController.findAll);

router.put('/users/:id', userController.update);

router.delete('/users/:id', userController.delete);




module.exports = router;
