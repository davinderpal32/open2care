'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CarecenterServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carecenterTypeId:  {
        type: Sequelize.INTEGER,
        references: {
            model: 'CarecenterType',
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
    return queryInterface.dropTable('CarecenterServices');
  }
};