'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.User,{
        foreignKey:'userId'
      }) 
      Product.belongsTo(models.Category,{
        foreignKey:'categoryId'
      })
    }
  
  }
  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    images:DataTypes.JSON,
    quantity: DataTypes.INTEGER,
    userId:DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    categoryId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};