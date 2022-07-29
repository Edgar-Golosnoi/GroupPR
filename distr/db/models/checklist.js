"use strict";

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CheckList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User
    }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'user_id'
      });
    }

  }

  CheckList.init({
    nameEmployer: DataTypes.STRING,
    nameMentor: DataTypes.STRING,
    point1: DataTypes.BOOLEAN,
    point2: DataTypes.BOOLEAN,
    point3: DataTypes.BOOLEAN,
    point4: DataTypes.BOOLEAN,
    point5: DataTypes.BOOLEAN,
    point6: DataTypes.BOOLEAN,
    point7: DataTypes.BOOLEAN,
    point8: DataTypes.BOOLEAN,
    point9: DataTypes.BOOLEAN,
    point10: DataTypes.BOOLEAN,
    point11: DataTypes.BOOLEAN,
    point12: DataTypes.BOOLEAN,
    pointInput: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CheckList'
  });
  return CheckList;
};