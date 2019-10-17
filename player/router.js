const { Router } = require('express');
const Player = require('./model');
const Team = require('../team/model');
const router = new Router();

router.get('/player', (req, res, next) => {
  Player.findAll()
    .then(players => {
      res.send(players);
    })
    .catch(next);
});

router.get('/player/:id', (req, res, next) => {
// Let's help the client by including (or embedding) the team inside the player. Sequelize has built-in features to do just this. All you need to do is modify the GET /player/:id route. You need to add an options object as an argument to the findByPk call. The object needs to have an include property with the value of an array containg the Team model.
  Player.findByPk(req.params.id, {include: [Team]})
    .then(params => {
      res.send(params);
    })
    .catch(next);
});

router.post('/player', (req, res, next) => {
  Player.create(req.body) 
  .then(player => res.json(player)) 
  .catch(next)
});

//Export the router.
module.exports = router;



