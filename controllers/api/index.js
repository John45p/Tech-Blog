const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');
router.use('/user', userRoutes);
// router.use('/posts', postRoutes);
router.use('/posts', postRoutes);

module.exports = router;