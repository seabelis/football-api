const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const port = process.env.PORT || 4000
// Import ./team/router as a constant named teamRouter. 
const teamRouter = require('./team/router');

// You can remove the db and Team imports now, since they are already imported in team/router.js
// const db = require ('./db');
// const Team = require('./team/model');

app
  .use(jsonParser)
  .use(teamRouter)
  .listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });

