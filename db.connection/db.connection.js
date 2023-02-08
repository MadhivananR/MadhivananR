const dbConfig = require("../db.config/db.config");
const Sequelize = require('sequelize');

// Connect to the MySQL database
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,'', {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

module.exports={sequelize}