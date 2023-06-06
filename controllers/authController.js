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
