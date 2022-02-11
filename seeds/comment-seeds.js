const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "sdfsdf",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "vbvbnvb",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Athrthy",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;