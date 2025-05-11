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
        type: Sequelize.STRING(25),
        allowNull: false,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('productDetail');
  }
};
