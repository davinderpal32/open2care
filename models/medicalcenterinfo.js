'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicalcenterInfo = sequelize.define('MedicalcenterInfo', {
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  MedicalcenterInfo.associate = function(models) {
    // associations can be defined here
  };
  return MedicalcenterInfo;
};