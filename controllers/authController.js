const User = require('../models/User');

exports.registerForm = (req, res) => {
  res.render('register');
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    console.log('User registered:', user);
    res.redirect('/dashboard');
  } catch (err) {
    console.error('Error registering user:', err);
    res.render('error');
  }
};