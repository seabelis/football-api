//Import Sequelize.
const Sequelize = require('sequelize');

// Import db.js as a constant named db.
const db = require ('../db')


const Player = db.define(
  'player',
  {
    name: {
      type: Sequelize.STRING,
      number: Sequelize.INTEGER
    }
  }
)
//Export the model.
module.exports = Player
