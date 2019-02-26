'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clubs = sequelize.define('Clubs', {
    club_name: DataTypes.STRING,
    total_players: DataTypes.INTEGER
  }, {});
  Clubs.associate = function(models) {
    // associations can be defined here
    Clubs.hasMany(models.Players)
  };
  return Clubs;
};