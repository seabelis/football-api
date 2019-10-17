const express = require('express')
const app = express()
const port = process.env.PORT || 4000
// Import ./team/router as a constant named teamRouter. 
const teamRouter = require('./Team/router');

// You can remove the db and Team imports now, since they are already imported in team/router.js
// const db = require ('./db');
// const Team = require('./team/model');


app
  .use(teamRouter)
  .listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });
