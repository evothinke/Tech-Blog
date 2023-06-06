const express = require('express');
const router = express.Router();
const index = require('../controllers/index');
const blogController = require('../controllers/blogController');
const authController = require('../controllers/authController');
const dashboardController = require('../controllers/dashboardController');
const commentController = require('../controllers/commentController');
//index route
//router.get('/', index.index);
router.get('/', (req, res) => {
  // Handle the root URL request here
  res.render('../views/index.handlebars');
});
//blog Routes
router.get('/blog', blogController.index);
router.get('/blog/create', blogController.createForm);
router.post('/blog/create', blogController.create);
router.get('/blog/:id/edit', blogController.editForm);
router.post('/blog/:id/edit', blogController.update);
router.get('/blog/:id/delete', blogController.delete);

//authentication Routes
router.get('/register', authController.registerForm);
router.post('/register', authController.register);
router.get('/login', authController.loginForm);
router.post('/login', authController.login);

router.post('/:blogId/comments', commentController.create);
//dashboard
router.get('/dashboard', dashboardController.dashboard);
module.exports = router;
