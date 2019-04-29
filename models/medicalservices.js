'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicalServices = sequelize.define('MedicalServices', {
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  MedicalServices.associate = function(models) {
    // associations can be defined here
  };
  return MedicalServices;
};