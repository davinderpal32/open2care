'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicalServices = sequelize.define('MedicalServices', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    centerId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Users',
          key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    serviceName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    cost: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    approxTime: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    appointmentTime: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  MedicalServices.associate = function(models) {
    // associations can be defined here
  };
  return MedicalServices;
};