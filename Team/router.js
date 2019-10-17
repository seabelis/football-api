// Import the Router class from express.
const { Router } = require('express');

//Import the Team model class.
const Team = require('./model');

// Instantiate a router.
const router = new Router();

//Register a GET endpoint on the '/team' route. This route will get all the team rows from the table.
//The route handler should take three arguments: the request (or req), the response (or res), and the next function.

router.get('/team', (req, res, next) => {

  // Inside the route handler: Call the Team.findAll method.
  Team.findAll()

  // Add a then callback. It will receive the list of teams. Send the list as the response.
    .then(teams => {
      res.send(teams);
    })

    // Add a catch callback. It will receive an error if it is thrown. Pass it to next.
    .catch(next);
});

// Register a POST endpoint for teams in team/router.js. The route should listen for POST requests on the /team route. Pass the request's body to Team.create, which sequelize will use to populate the row's fields.
router.post('/team', (req, res, next) => {
  console.log ('what is req.body', req.body)
  Team.create(req.body) 
  //Add a then callback that sends the newly created team as a the response. Add a catch callback where you pass any caught errors to next.
  .then(team => res.json(team)) 
  .catch(next)
});

//Export the router.
module.exports = router;



