'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      models.City.belongsTo(models.Country,{
        foreignKey:{
          allowNull:false,
        }
      })
      models.City.hasMany(models.User)
    }
  };
  City.init({
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};