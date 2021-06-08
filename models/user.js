'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    tel: DataTypes.INTEGER,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    roleId:DataTypes.BIGINT,
    cityId:DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};