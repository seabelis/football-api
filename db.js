// Import sequelize as a variabled named Sequelize. You should capitalize the variable because it is a class.
const Sequelize = require('sequelize');

// Declare a variable named databaseUrl and set it equal to your local database url, which should be 'postgres://postgres:<password>@localhost:5435/postgres', where <password> should be replaced with the password you've chosen for your database.
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5435/postgres'

// Create a new instance of the Sequelize class named db, passing the databaseUrl to the constructor.
const db = new Sequelize(databaseUrl)

// Call the sync method of the instance you created. This method will sync the data in your database with the schema you are about to create.
db
  .sync()
  // Add a then callback to sync that logs a message confirming the database schema has been updated.
  .then(() => console.log('Database schema updated'))
  // Add a catch callback that will pass any errors to console.error.
  .catch(console.error)

  // Export db.
  module.exports = db


