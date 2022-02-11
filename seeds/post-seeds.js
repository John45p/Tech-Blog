const { Post } = require('../models');

const postData = [
  {
    title: 'dhdfh',
    content: 'ghjjhkhjkhjkhjkhjkhjkhjkhjkhjkhjkhjkhjkhjkhjkhjk.',
    user_id: 1
    
  },
  {
    title: 'rtyutyurtyurtu',
    content: '.............jkhjkhjkhjkturturturturtu',
    user_id: 2
  },
  {
    title: 'rturturturturtu',
    content: 'rurturturturtttttttttttttttttttttttttttttttughjghj',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;