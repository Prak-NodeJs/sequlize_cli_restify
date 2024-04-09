'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull:false,
        unique:true,
        type: Sequelize.STRING,    
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING,
       
      },
      email: {
        allowNull:false,
        unique:true,
        type: Sequelize.STRING,
       
      },
      password:{
        allowNull:false,
        type:Sequelize.STRING,
        
      },
      image:{
        type:Sequelize.STRING
      },
      status:{
        allowNull:false,
        defaultValue:'Active',
        type:Sequelize.STRING, 
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
    await queryInterface.dropTable('Users');
  }
};