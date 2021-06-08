'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Effect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Effect.init({
    id: DataTypes.BIGINT,
    effect: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Effect',
  });
  return Effect;
};