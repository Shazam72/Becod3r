'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ressource extends Model {
    static associate(models) {

      models.Ressource.belongsTo(models.User,{
        foreignKey:{
          allowNull:false,
        }
      })

      models.Ressource.belongsTo(models.Category,{
        foreignKey:{
          allowNull:false,
        }
      })

    }
  };
  Ressource.init({
    path: DataTypes.STRING,
    nom: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Ressource',
  });
  return Ressource;
};