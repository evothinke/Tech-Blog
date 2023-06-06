const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register Form
router.get('/register', authController.registerForm);

// Register User
router.post('/register', authController.register);

module.exports = router;
