'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      models.Country.hasMany(models.City)
    }
  };
  Country.init({
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};