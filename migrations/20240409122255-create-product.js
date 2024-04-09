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
        allowNull:false,
        type: Sequelize.STRING
      },
      price: {
        allowNull:false,
        defaultValue:0.0,
        type: Sequelize.DECIMAL(10,2)
      },
      quantity: {
        allowNull:false,
        defaultValue:1,
        type: Sequelize.INTEGER
      },
      stock: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
        allowNull: false
      },
       categoryId:{
       type:Sequelize.INTEGER,
       references: {
        model: {
          tableName: 'Categories',
        },
        key: 'id'
      },
      allowNull: false
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