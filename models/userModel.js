const Sequelize = require('sequelize');

// Connect to the MySQL database
const sequelize = new Sequelize('testdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define the model for the "users" table
const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});
// Export the User model
module.exports = User;
