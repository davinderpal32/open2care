'use strict';
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Carecenter = sequelize.define('Carecenters', {
    password: DataTypes.STRING,
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