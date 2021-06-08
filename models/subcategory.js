'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.SubCategory.belongsTo(models.Category)
      models.SubCategory.hasMany(models.Forum)
    }
  };
  SubCategory.init({
    id: DataTypes.BIGINT,
    sub_category: DataTypes.STRING,
    category: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  return SubCategory;
};