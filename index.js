const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Import ./team/router as a constant named teamRouter. 
const jsonParser = bodyParser.json()
const corsMiddleware = cors()
const teamRouter = require('./team/router');
const playerRouter = require('./player/router');
const authRouter = require('./auth/router');
const userRouter = require('./user/router')
const Team = require('./team/model')
const Player = require('./player/model')
const User = require('./user/model')
const db = require('./db')
const app = express()


const port = process.env.PORT || 4000


// You can remove the db and Team imports now, since they are already imported in team/router.js
// const db = require ('./db');
// const Team = require('./team/model');

app
  .use(jsonParser)
  .use(corsMiddleware)
  .use(teamRouter)
  .use(playerRouter)
  .use(authRouter)
  .use(userRouter)
  .listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });

  db
  .sync({ force: true })
  .then(() => {
    console.log('Database schema has been updated.');

    // simple seeding script
    // const team = Team.create({ name: 'Egel'})
    // const team2 = Team.create({ name: 'Das'})
    // return Promise.all([team, team2])

    // Script that iterates over arrays and creates rows in the database for them
    const teamNames = ['Egel', 'Das', 'Eagle', 'Pinguin']
    
    const teams = teamNames.map(teamName => Team.create({ name: teamName}))
    return Promise.all(teams)
  })
  .then(() => {
    const players = [
      { name: 'Mimi', number: 4, teamId: 1},
      { name: 'Wouter', number: 1, teamId: 2},
      { name: 'David', number: 9, teamId: 3},
      { name: 'Bram', number: 8, teamId: 4},
      { name: 'Lisa', number: 10, teamId: 1},
      { name: 'Miloud', number: 2, teamId: 2},
      { name: 'Violeta', number: 3, teamId: 3},
      { name: 'Johan', number: 5, teamId: 4},
      { name: 'Danny', number: 6, teamId: 3},
      { name: 'Rembert', number: 7, teamId: 2},
      { name: 'Kelley', number: 10, teamId: 1},
      { name: 'Jeroen', number: 12, teamId: 4},
      { name: 'Rein', number: 11, teamId: 2},
    ]

    const playerPromises = players.map((player) => Player.create(player))
    return Promise.all(playerPromises)
  })
  .catch(console.error);


/* 
TODO
- player Model
- router -> Player router
- Define the relationships
- router -> add routes to team router so you can get the players of a team?
*/