'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      models.Message.belongsTo(models.User,{
        foreignKey:{
          allowNull:false
        }
      })
      models.Message.belongsTo(models.Forum)
      models.Message.belongsTo(models.Chat)
    }
  };
  Message.init({
    message: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};