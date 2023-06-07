const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


// Register Form
router.get('/register', authController.registerForm);

// Register User
router.post('/register', (req, res) => authController.register(req, res, req.body.username));

//router.get('/login', authController.loginForm);
// router.post('/login', authController.login);
//router.get('/dashboard', authController.dashboard);

module.exports = router;

