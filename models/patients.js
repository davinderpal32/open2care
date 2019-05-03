'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Patients.associate = function(models) {
    // associations can be defined here
  };
  return Patients;
};