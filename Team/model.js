const Sequelize = require('sequelize');
const db = require('../db');

const Team = db.define("team", {
  name: {
    type: Sequelize.STRING,
    field: "name",
  },
});

// Declare a constant named Team. Capitalize the variable because it will be a class.
// Set the variable equal to a call to db.define.
const Team = db.define(
//The second argument is an object that defines the table's fields. Add one string field called name and give it the type Sequelize.STRING.
  'team',
  {
    name: {
      type: Sequelize.STRING,
      field: 'team_name'
    }
  }
)
//Export the model.
module.exports = Team
