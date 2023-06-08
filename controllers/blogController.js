// const Blogs = require('../models/Blogs');
// const Users = require('../models/Users');
// const Comments = require('../models/Comments');
const { Blogs, Users, Comments } = require('../models');
exports.blog = (req, res) => {
  res.render('blog', { loggedInUser: req.session.user });
};

exports.index = (req, res) => {
  Blogs.findAll({ include: [{ model: Users, include: [Comments] }], logging: console.log })
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

exports.getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blogs.findByPk(blogId, {
      include: [Comments]
    });

    res.render('blog/post', { blog });
  } catch (error) {
    console.error('Error retrieving blog post:', error);
    res.redirect('/');
  }
};

exports.createForm = (req, res) => {
  res.render('blog/create');
};

exports.create = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.session.user.id;
  try {
    const blog = await Blogs.create({ title, content, belongsto: userId });
    console.log('New blog created:', blog);
    res.redirect('/dashboard');
  } catch (err) {
    console.error('Error creating blog:', err);
    res.render('error');
  }
};

exports.editForm = (req, res) => {
  const blogId = req.params.id;
  Blogs.findByPk(blogId)
    .then(blog => {
      res.render('blog/edit', { blog });
    })
    .catch(err => {
      console.error('Error retrieving blog:', err);
      res.render('error');
    });
};

exports.update = (req, res) => {
  const blogId = req.params.id;
  const { title, content } = req.body;
  Blogs.update({ title, content }, { where: { id: blogId } })
    .then(() => {
      res.redirect('/blog');
    })
    .catch(err => {
      console.error('Error updating blog:', err);
      res.render('error');
    });
};

exports.delete = (req, res) => {
  const blogId = req.params.id;
  Blogs.destroy({ where: { id: blogId } })
    .then(() => {
      res.redirect('/blog');
    })
    .catch(err => {
      console.error('Error deleting blog:', err);
      res.render('error');
    });
};
