'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarecenterType = sequelize.define('CarecenterType', {
    name: DataTypes.STRING
  }, {});
  CarecenterType.associate = function(models) {
    // associations can be defined here
  };
  return CarecenterType;
};