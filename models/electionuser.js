const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  var ElectionUser = sequelize.define('ElectionUser', {
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ElectionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }, {});
  ElectionUser.associate = function(models) {
    // associations can be defined here
  };
  return ElectionUser;
};