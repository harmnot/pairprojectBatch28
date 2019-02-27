'use strict';
module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Players', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.ENUM("Male", "Female"),
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM("Athlete", "Admin", "Promotor"),
    clubId: DataTypes.INTEGER
  }, {});
  Players.associate = function(models) {
    // associations can be defined here
  };
  return Players;
};