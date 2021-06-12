'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      email: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.STRING
      },
      nom: {
        allowNull:false,
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      date_naissance: {
        type: Sequelize.DATE
      },
      tel: {
        type: Sequelize.STRING
      },
      password: {
        allowNull:false,
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Users');
  }
};