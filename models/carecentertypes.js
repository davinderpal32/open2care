'use strict';
const Joi = require('joi');
module.exports = (sequelize, DataTypes) => {
  
  const CarecenterTypes = sequelize.define('CarecenterTypes', {
    typeName: DataTypes.STRING
  }, {});
  CarecenterTypes.associate = function(models) {
    // associations can be defined here
  };
  return CarecenterTypes;
};