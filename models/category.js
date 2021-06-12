'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      models.Category.hasMany(models.SubCategory)
      models.Category.hasMany(models.Ressource)
    }
  };
  Category.init({
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};