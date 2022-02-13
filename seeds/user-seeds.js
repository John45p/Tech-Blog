const { User } = require('../models');

const userData = [
  {
    username: 'John',
    password: 'password'
    
  },
  {
    username: 'Lele',
    password: 'password2'
  },
  {
    username: 'Henry',
    password: 'password3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;