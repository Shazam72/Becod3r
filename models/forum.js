'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    static associate(models) {
      models.Forum.belongsTo(models.SubCategory,{
        foreignKey:{
          allowNull:false,
        }
      })

      models.Forum.hasMany(models.Message)
    }
  };
  Forum.init({
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};