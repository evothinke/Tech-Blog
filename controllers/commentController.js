const Comment = require('../models/Comments');

exports.create = (req, res) => {
  const { blogId } = req.params;
  const { content } = req.body;
  const userId = req.session.user.id; // Assuming user_id is available in req.session.user.id

  Comment.create({
    content,
    BlogId: blogId,
    user_id: userId // Add the user_id property
  })
    .then(() => {
      res.redirect(`/blog`);
    })
    .catch(err => {
      console.error('Error creating comment:', err);
      res.render('error');
    });
};
