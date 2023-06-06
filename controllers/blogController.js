const Blog = require('../models/Blog');
const User = require('../models/User');
const Comments = require('../models/Comments');

exports.blog = (req, res) => {
  res.render('blog', { loggedInUser: req.session.user });
};

exports.index = (req, res) => {
  Blog.findAll({ include: [User, Comments], logging: console.log })
    .then(blogs => {
      blogs.forEach(blog => {
        console.log("Comments:", blog.Comments);
      });
      res.render('blog/index', { blogs, loggedInUser: req.session.user });
    })
    .catch(err => {
      console.error('Error retrieving blogs:', err);
      res.render('error');
    });
};