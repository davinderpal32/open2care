'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName:DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    role: DataTypes.STRING,
    picture: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    resetToken: DataTypes.STRING,
    referCode: DataTypes.STRING,
    referredBy: DataTypes.STRING,
    deviceType: DataTypes.STRING,
    deviceId: DataTypes.STRING,
    deviceToken: DataTypes.STRING
  }, {});
  Patients.associate = function(models) {
    // associations can be defined here
  };
  return Patients;
};