const Sequelize = require('sequelize');
const db = require ('../db')
const Team = require('../team/model');

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

Player.belongsTo(Team)

//Export the model.
module.exports = Player
