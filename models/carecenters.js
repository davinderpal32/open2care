'use strict';
const bcrypt = require("bcryptjs");
const Joi = require('joi');
module.exports = (sequelize, DataTypes) => {
  const Carecenter = sequelize.define('Carecenters',
  //   Joi.object().keys({
  //     email: Joi.string().email().required(),
  //     phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
  //     userName: Joi.string().required(),

  //   })
  // );
{
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        schema: Joi.object().keys({
          requiredString: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
        })
      },
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    speciality: DataTypes.STRING,
    resettoken: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Carecenter.associate = function(models) {
    
  };
  Carecenter.beforeCreate((user, options) => {

    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
        
});

Carecenter.beforeUpdate((user, options) => {

  return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
});
  return Carecenter;
};