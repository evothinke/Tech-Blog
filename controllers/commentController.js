const Comment = require('../models/Comments');

exports.create = (req, res) => {
  const { blogId } = req.params;
  const { content } = req.body;

  Comment.create({
    content,
    BlogId: blogId
  })
    .then(() => {
      res.redirect(`/blog`);
    })
    .catch(err => {
      console.error('Error creating comment:', err);
      res.render('error');
    });
};
