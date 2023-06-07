const Blog = require('../models/Blogs');
const User = require('../models/Users');



exports.dashboard = (req, res) => {
  if (req.session.user) {
    const userId = req.session.user.id;
    Blog.findAll({ where: { belongsto: userId } })
      .then(posts => {
        res.render('dashboard', { posts, loggedInUser: req.session.user });
      })
      .catch(err => {
        console.error('Error retrieving posts:', err);
        res.render('error');
      });
  } else {
    res.redirect('/login');
  }
};