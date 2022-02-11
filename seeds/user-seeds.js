const { User } = require('../models');

const userData = [
  {
    username: 'fvbnmbnmbnmbnma',
    password: 'password1'
    
  },
  {
    username: 'sdzxzxczxczxc',
    password: 'password2'
  },
  {
    username: 'zxvxcvxcvxcv',
    password: 'password3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;