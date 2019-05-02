'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CarecenterService', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carecenterTypeId:  {
        type: Sequelize.INTEGER,
        references: {
            model: 'Carecenter',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      serviceName: {
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
    return queryInterface.dropTable('CarecenterService');
  }
};