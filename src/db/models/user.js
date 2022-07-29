const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ CheckList, Role }) {
      // define association here
      this.hasMany(CheckList, { foreignKey: 'user_id' });
      this.belongsTo(Role, { foreignKey: 'role_id' });
    }
  }
  User.init({
    nameUser: DataTypes.STRING,
    email: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    hashPassword: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
