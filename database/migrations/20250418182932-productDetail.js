'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productDetail', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fabric: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      size: {
        type: Sequelize.TINYINT,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('productDetail');
  }
};
