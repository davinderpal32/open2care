'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarecenterServices = sequelize.define('CarecenterServices', {
    serviceName: DataTypes.STRING
  }, {});
  CarecenterServices.associate = function(models) {
    // associations can be defined here
  };
  return CarecenterServices;
};