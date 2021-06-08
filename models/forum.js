'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Forum.belongsTo(models.SubCategory)
      models.Forum.hasMany(models.Message)
    }
  };
  Forum.init({
    id: DataTypes.BIGINT,
    subcategory: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};