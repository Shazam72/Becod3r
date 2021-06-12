'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.belongsTo(models.Role,{
        foreignKey:{
          allowNull: false,
        }
      })

      models.User.belongsTo(models.City)
      models.User.hasMany(models.Message)
      models.User.hasMany(models.Ressource)
    }
  };
  User.init({
    email: DataTypes.STRING,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    date_naissance: DataTypes.DATE,
    tel: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};