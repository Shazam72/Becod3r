'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ressource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    authorId:DataTypes.STRING,
    categoryId:DataTypes.BIGINT,

  }, {
    sequelize,
    modelName: 'Ressource',
  });
  return Ressource;
};