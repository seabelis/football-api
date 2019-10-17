//Import Sequelize.
const Sequelize = require('sequelize');

// Import db.js as a constant named db.
const db = require ('../db')


const Player = db.define(
  'player',
  {
    name: {
      type: Sequelize.STRING,
      field: 'player_name'
    },
    number: {
      type: Sequelize.INTEGER,
      field: 'player_number'
    }
  }
)
//Export the model.
module.exports = Player
