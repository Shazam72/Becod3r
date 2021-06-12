'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    static associate(models) {
      models.SubCategory.belongsTo(models.Category,{
        foreignKey:{
          allowNull:false
        }
      })
      models.SubCategory.hasMany(models.Forum)
    }
  };
  SubCategory.init({
    sub_category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  return SubCategory;
};