'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      models.Chat.hasMany(models.Message)
    }
  };
  Chat.init({
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};