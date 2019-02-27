'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clubs = sequelize.define('Clubs', {
    club_name: DataTypes.STRING,
    adress: DataTypes.STRING
  }, {});
  Clubs.associate = function(models) {
    // associations can be defined here
  };
  return Clubs;
};