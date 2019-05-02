'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarecenterService = sequelize.define('CarecenterService', {
    serviceName: DataTypes.STRING
  }, {});
  CarecenterService.associate = function(models) {
    // associations can be defined here
  };
  return CarecenterService;
};