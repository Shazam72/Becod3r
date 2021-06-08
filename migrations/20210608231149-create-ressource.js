'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ressources', {
      path: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      },
      authorId: {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model:'Users',
          key:'email'
        }
      },
      categoryId:{
        type:Sequelize.BIGINT,
        allowNull:false,
        references:{
          model:'Categories',
          key:'id'
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ressources');
  }
};