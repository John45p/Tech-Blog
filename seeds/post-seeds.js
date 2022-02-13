const { Post } = require('../models');

const postData = [
  {
    title: 'Here’s how to stream the 2022 Super Bowl',
    content: 'Super Bowl LVI kicks off on Sunday, February 13 at 6:30pm ET/3:30pm PT, with the Los Angeles Rams facing off against the Cincinnati Bengals in Inglewood, California. The game will be aired on NBC —..',
    user_id: 1
    
  },
  {
    title: 'Why are cybersecurity asset management startups so hot right now?urtyurtu',
    content: 'The proliferation of new asset types, along with the widespread shift to remote work, has resulted in assets becoming more highly distributed, making them even more difficult to manage and inventor...',
    user_id: 2
  },
  {
    title: 'What does a real economist think of cryptocurrencies?',
    content: 'Tyler Cowen is an economist and writer who co-founded the popular blog, MarginalRevolution. A professor at George Mason University, Cowen was named one of the Economist’s top 36 economists wh...',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;