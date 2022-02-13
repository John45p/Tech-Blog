const router = require('express').Router();
const {  User } = require('../../models');


router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
          console.log("wrong username");
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
      console.log(userData)
      if (!validPassword) {
       
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'You are now logged in!' });
        console.log(userData);
      });
  
    } catch (err) {
      res.status(400).json(err);
      console.log("err3")
    }
  });

  router.post('/addUser', async (req, res) => {
    try {
          const { username, password } = req.body;
      console.log(username);
      console.log(password);
      console.log("adding user")
  
          const addUser = await User.create({ username: username, password: password })
           if(!addUser) {
             console.log("couldn't add user")
               res.status(500).json('Couldn\'t add new user!');
           }
          res.redirect('/')
  } catch (error) {
      res.status(500).json(error)
      
  }
  })

  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  module.exports = router;