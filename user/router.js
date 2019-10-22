const { Router } = require('express');
const User = require('./model');
const router = new Router();

router.post('/user', (req, res, next) => {
  User.create(req.body) 
  .then(user => res.json(user)) 
  .catch(next)
});
module.exports = router