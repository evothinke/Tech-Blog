const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const commentController = require('../controllers/commentController');


router.get('/', blogController.index);
router.get('/create', blogController.createForm);
router.post('/create', blogController.create);
router.get('/:id/edit', blogController.editForm);
router.post('/:id/edit', blogController.update);
router.get('/:id/delete', blogController.delete);
router.post('/:blogId/comments', commentController.create);

module.exports = router;
