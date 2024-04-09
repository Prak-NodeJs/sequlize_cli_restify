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
    title: {
      allowNull:false,
      type: DataTypes.STRING
    },
    price: {
      allowNull:false,
      defaultValue:0.0,
      type: DataTypes.DECIMAL(10,2)
    },
    quantity: {
      allowNull:false,
      defaultValue:1,
      type: DataTypes.INTEGER
    },
    stock: {
      allowNull:false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};