const User = require('../models/Users');
const bcrypt = require('bcrypt');
 // Assuming `user` is the user object retrieved from the database
//const userId = req.session.user ? req.session.user.id : null;

exports.registerForm = (req, res) => {
  res.render('register');
};
module.exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'User with the specified username already exists.' });
    }

    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};

exports.loginForm = (req, res) => {
  res.render('login');
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username, password } });
    if (user) {
      req.session.user = user;
      req.session.save(() => {
        if (req.headers.accept.includes('application/json')) {
          res.json({ redirect: '/dashboard' });
        } else {
          res.redirect('/dashboard');
        }
      });
    } else {
      res.render('login', { error: 'Invalid username or password' });
    }
  } catch (err) {
    console.error('Error logging in:', err);
    res.render('error');
  }
};
