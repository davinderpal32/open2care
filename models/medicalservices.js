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
    serviceId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    cost: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  MedicalServices.associate = function(models) {
    // associations can be defined here
  };
  return MedicalServices;
};