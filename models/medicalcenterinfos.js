'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicalcenterInfo = sequelize.define('MedicalcenterInfo', {
    centerId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Carecenter',
          key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    centerName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    centerType: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    licenseNumber: {
      allowNull: true,
      type: DataTypes.STRING
    },
    centerPhoneNumber: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    waitingTime: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    address1: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address2: {
      allowNull: true,
      type: DataTypes.STRING
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING
    },
    state: {
      allowNull: true,
      type: DataTypes.STRING
    },
    zipCode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    latitude: {
      allowNull: true,
      type: DataTypes.STRING
    },
    longitude: {
      allowNull: true,
      type: DataTypes.STRING
    },
    businessDays: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  MedicalcenterInfo.associate = function(models) {
    // associations can be defined here
  };
  return MedicalcenterInfo;
};