// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/user', userController.getUser);
router.post('/user', userController.createUser);

// afb
module.exports = router;
