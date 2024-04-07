'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey:'categoryId',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  Category.init({
    title: DataTypes.STRING,
    images: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};