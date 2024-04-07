'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      images:{
        type:Sequelize.JSON,
        allowNull:true
      },
      quantity: {
        allowNull:false,
        defaultValue:1,
        type: Sequelize.INTEGER,   
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      userId:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      categoryId:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};