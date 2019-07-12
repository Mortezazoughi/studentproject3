'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test2 = sequelize.define('Test2', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {});
  Test2.associate = function(models) {
    // associations can be defined here
  };
  return Test2;
};