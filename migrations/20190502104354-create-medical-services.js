'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicalServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      centerId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Carecenters',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      serviceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'CarecenterServices',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      cost: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('MedicalServices');
  }
};