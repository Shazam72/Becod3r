'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      message: {
        allowNull:false,
        type: Sequelize.TEXT
      },
      forumId:{
        type:Sequelize.BIGINT,
        references:{
          model:'Forums',
          key:'id',
        }
      },
      chatId:{
        type:Sequelize.BIGINT,
        references:{
          model:'Chats',
          key:'id',
        }
      },
      userId:{
        type:Sequelize.STRING,
        allowNull:false,
        references:{
          model:'Users',
          key:'email',
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
    await queryInterface.dropTable('Messages');
  }
};