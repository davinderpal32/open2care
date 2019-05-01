'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicalcenterInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      centerId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      centerName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      centerType: {
        allowNull: false,
        type: Sequelize.ENUM('Urgent Care', 'Dentist', 'Primary Care'),
        defaultValue: 'Urgent Care'
      },
      licenseNumber: {
        allowNull: true,
        type: Sequelize.STRING
      },
      centerPhoneNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      address1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: true,
        type: Sequelize.STRING
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      businessDays: {
        allowNull: false,
        type: Sequelize.STRING
      },
      insuranceAccepted: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MedicalcenterInfos');
  }
};