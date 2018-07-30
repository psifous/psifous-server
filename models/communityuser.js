const Sequelize = require('sequelize')


module.exports = (sequelize, DataTypes) => {
  var CommunityUser = sequelize.define('CommunityUser', {
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    CommunityId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }, {});
  CommunityUser.associate = function(models) {
    // associations can be defined here
  };
  return CommunityUser;
};