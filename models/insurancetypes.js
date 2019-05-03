'use strict';
module.exports = (sequelize, DataTypes) => {
  const InsuranceTypes = sequelize.define('InsuranceTypes', {
    name: DataTypes.STRING
  }, {});
  InsuranceTypes.associate = function(models) {
    // associations can be defined here
  };
  return InsuranceTypes;
};