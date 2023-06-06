const router = require('express').Router();
const authController = require('../controllers/authController')
const session = require('express-session')


router.get('/', (req, res) => {
  try {
    res.render('index', { layout: 'main'});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

exports.home = (req, res) => {
  res.render('home', { loggedInUser: req.session.user });
};
