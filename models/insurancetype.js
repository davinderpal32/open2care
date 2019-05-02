'use strict';
module.exports = (sequelize, DataTypes) => {
  const InsuranceType = sequelize.define('InsuranceType', {
    name: DataTypes.STRING
  }, {});
  InsuranceType.associate = function(models) {
    // associations can be defined here
  };
  return InsuranceType;
};