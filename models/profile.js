'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.hasOne(models.User)
    }
  }
  Profile.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    addres: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profiles',
  });
  return Profile;
};