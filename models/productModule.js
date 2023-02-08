

const Sequelize = require('sequelize');
const {sequelize}=require("../db.connection/db.connection");


// Define the model for the "products" table
const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
    productName: {
    type: Sequelize.STRING
  },
  productPrice: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});
// Export the Product model
module.exports = Product;
