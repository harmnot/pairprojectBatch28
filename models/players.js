'use strict'

const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Players', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.ENUM('Male', 'Female'),
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Wrong e-mail format.'
        },
        isUnique: function (value) {
          return Players.findOne({
            where: {
              email: value.toLowerCase(),
              id: {
                [Op.ne]: this.id
              }
            }
          })
            .then((data) => {
              if (data) {
                throw new Error('E-mail is already registered. Try another e-mail.')
              }
            })
        }
      }
    },
    ClubId: DataTypes.INTEGER
  }, {});
  Players.associate = function (models) {
    // associations can be defined here
    Players.belongsTo(models.Clubs)
  };
  return Players;
};