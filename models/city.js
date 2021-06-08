'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Role.hasMany(models.User)
      models.Role.belongsTo(models.Country)
    }
  };
  City.init({
    id: DataTypes.BIGINT,
    city: DataTypes.STRING,
    country: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};